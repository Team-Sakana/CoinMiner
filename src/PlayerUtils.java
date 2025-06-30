package org.lobby.utils;

import com.destroystokyo.paper.ClientOption;
import com.destroystokyo.paper.Title;
import com.destroystokyo.paper.block.TargetBlockInfo;
import com.destroystokyo.paper.entity.TargetEntityInfo;
import com.destroystokyo.paper.profile.PlayerProfile;
import com.destroystokyo.paper.profile.ProfileProperty;
import io.papermc.paper.entity.LookAnchor;
import io.papermc.paper.entity.TeleportFlag;
import io.papermc.paper.math.Position;
import io.papermc.paper.threadedregions.scheduler.EntityScheduler;
import net.kyori.adventure.bossbar.BossBar;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.TextColor;
import net.kyori.adventure.util.TriState;
import net.md_5.bungee.api.ChatColor;
import net.md_5.bungee.api.chat.BaseComponent;
import org.apache.commons.lang3.StringUtils;
import org.bukkit.*;
import org.bukkit.advancement.Advancement;
import org.bukkit.advancement.AdvancementProgress;
import org.bukkit.attribute.Attribute;
import org.bukkit.attribute.AttributeInstance;
import org.bukkit.block.*;
import org.bukkit.block.data.BlockData;
import org.bukkit.block.sign.Side;
import org.bukkit.conversations.Conversation;
import org.bukkit.conversations.ConversationAbandonedEvent;
import org.bukkit.damage.DamageSource;
import org.bukkit.entity.*;
import org.bukkit.entity.memory.MemoryKey;
import org.bukkit.event.entity.CreatureSpawnEvent;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityRegainHealthEvent;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.event.inventory.InventoryType;
import org.bukkit.event.player.PlayerKickEvent;
import org.bukkit.event.player.PlayerResourcePackStatusEvent;
import org.bukkit.event.player.PlayerTeleportEvent;
import org.bukkit.inventory.*;
import org.bukkit.map.MapView;
import org.bukkit.metadata.MetadataValue;
import org.bukkit.permissions.*;
import org.bukkit.persistence.PersistentDataAdapterContext;
import org.bukkit.persistence.PersistentDataContainer;
import org.bukkit.persistence.PersistentDataType;
import org.bukkit.plugin.Plugin;
import org.bukkit.potion.PotionEffect;
import org.bukkit.potion.PotionEffectType;
import org.bukkit.profile.PlayerTextures;
import org.bukkit.scoreboard.Scoreboard;
import org.bukkit.util.BoundingBox;
import org.bukkit.util.RayTraceResult;
import org.bukkit.util.Vector;
import org.checkerframework.checker.nullness.qual.NonNull;
import org.jetbrains.annotations.*;
import org.lobby.TolobbyMC21;
import org.lobby.song.MidiConverter;
import org.lobby.song.NBSConverter;
import org.lobby.song.Song;

import java.io.File;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.CompletableFuture;

import static org.lobby.TolobbyMC21.Move_Check;
import static org.lobby.TolobbyMC21.spawnLocation;

@SuppressWarnings({"deprecation", "removal", "unchecked", "unused"})
public class PlayerUtils {
    
    public static Location getCenterLocation(Player p) {
        Vector pos = p.getBoundingBox().getCenter();
        return new Location(p.getWorld(), pos.getX(), pos.getY(), pos.getZ(), p.getLocation().getYaw(), p.getLocation().getPitch());
    }
    
    public static boolean uuidIsOffline(UUID uuid) {
        return uuid.version() == 3;
    }
    
    public static String getAvatarUrl(Player player) {
        String avatarUrl = constructAvatarUrl(player.getName(), player.getUniqueId(), NMSUtil.getTexture(player));
        avatarUrl = PlaceholderUtil.replacePlaceholdersToDiscord(avatarUrl, player);
        return avatarUrl;
    }
    
    private static String constructAvatarUrl(String username, UUID uuid, String texture) {
        boolean offline = uuid == null || PlayerUtils.uuidIsOffline(uuid);
        OfflinePlayer player = null;
        if (org.apache.commons.lang3.StringUtils.isNotBlank(username) && offline) {
            player = Bukkit.getOfflinePlayer(username);
            uuid = player.getUniqueId();
            offline = PlayerUtils.uuidIsOffline(uuid);
        }
        if (org.apache.commons.lang3.StringUtils.isBlank(username) && uuid != null) {
            // resolve uuid to player/username
            player = Bukkit.getOfflinePlayer(uuid);
            username = player.getName();
        }
        if (org.apache.commons.lang3.StringUtils.isBlank(texture) && player != null && player.isOnline()) {
            // grab texture placeholder from player if online
            texture = NMSUtil.getTexture(player.getPlayer());
        }
        
        String avatarUrl = "https://crafatar.com/renders/head/{uuid-nodashes}.png?size={size}&overlay#{texture}";
        String defaultUrl = "https://crafatar.com/renders/head/{uuid-nodashes}.png?size={size}&overlay#{texture}";
        String offlineUrl = "https://cravatar.eu/helmavatar/{username}/{size}.png#{texture}";
        
        if (StringUtils.isBlank(avatarUrl)) {
            avatarUrl = !offline ? defaultUrl : offlineUrl;
        }
        
        if (offline && !avatarUrl.contains("{username}")) {
            avatarUrl = offlineUrl;
        }
        
        if (username.startsWith("*")) {
            // geyser adds * to beginning of it's usernames
            username = username.substring(1);
        }
        username = URLEncoder.encode(username, StandardCharsets.UTF_8);
    
        avatarUrl = avatarUrl
                .replace("{texture}", texture != null ? texture : "")
                .replace("{username}", username)
                .replace("{uuid}", uuid != null ? uuid.toString() : "")
                .replace("{uuid-nodashes}", uuid.toString().replace("-", ""))
                .replace("{size}", "128");
        
        return avatarUrl;
    }
    
    public static long getExp(int level) {
        if(level >= 30) {
            return 112 + (level - 30) * 9L;
        } else {
            return level >= 15 ? 37 + (level - 15) * 5 : level * 2L;
        }
    }

    public static void spawn(final Player p, final Long Delay, final int Repeat_Time) {
        try {
            if (p.getGameMode().equals(GameMode.CREATIVE) || p.getGameMode().equals(GameMode.SPECTATOR) || p.isOp()) {
                p.sendMessage(ChatColor.LIGHT_PURPLE + "텔레포트" + ChatColor.WHITE + "에 성공했습니다!");
                p.teleport(spawnLocation);
            } else {
                if (Repeat_Time == 0) {
                    Move_Check.remove(p);
                    Move_Check.put(p, false);
                    int second = Integer.parseInt(String.valueOf(Delay)) / 20;
                    p.sendMessage(ChatColor.GREEN + String.valueOf(second) + ChatColor.WHITE + "초 후에 " + ChatColor.LIGHT_PURPLE + "텔레포트 " + ChatColor.WHITE + "됩니다!\n움직이면 " + ChatColor.RED + "취소" + ChatColor.WHITE + "됩니다.");
                }
                Bukkit.getServer().getScheduler().scheduleSyncDelayedTask(TolobbyMC21.getPlugin(TolobbyMC21.class), () -> {
                    if (Move_Check.get(p)) {
                        p.sendMessage("텔레포트가 취소되었습니다.");
                    } else if (Repeat_Time == Delay) {
                        p.sendMessage("텔레포트에 성공했습니다.");
                        p.teleport(spawnLocation);
                    } else {
                        spawn(p, Delay, Repeat_Time + 1);
                    }
                }, 1L);
            }
        } catch (Exception Ex) {
            Ex.printStackTrace(System.err);
        }
    }

    public static Component opNameGenerator(Player p) {
        if(p.isOp()) {
            return p.displayName().color(TextColor.color(255, 170, 0)).hoverEvent(p.asHoverEvent());
        } else {
            return p.displayName().hoverEvent(p.asHoverEvent());
        }
    }

    public static String stringopNameGenerator(Player p) {
        if(p.isOp()) {
            return ChatColor.GOLD + p.getName() + ChatColor.RESET;
        } else {
            return p.getName();
        }
    }

    public static Component nameGenerator(Player p) {
        return p.teamDisplayName().hoverEvent(p.asHoverEvent());
    }

    public static void rpgInventoryset(Player p) {
        Inventory inventory = TolobbyMC21.getRPGInventory(p);
        for(int i = 0; i < inventory.getSize(); i++) {
            p.getInventory().setItem(i, inventory.getItem(i));
        }
    }

    public static void delayteleport(final Player p, final Location Teleport_Location, final Long Delay, final int Repeat_Time) {
        try {
            if (p.getGameMode().equals(GameMode.CREATIVE) || p.getGameMode().equals(GameMode.SPECTATOR) || p.isOp()) {
                p.sendMessage(net.md_5.bungee.api.ChatColor.LIGHT_PURPLE + "텔레포트" + net.md_5.bungee.api.ChatColor.WHITE + "에 성공했습니다!");
                p.teleport(Teleport_Location);
            } else {
                if (Repeat_Time == 0) {
                    TolobbyMC21.Move_Check.remove(p);
                    TolobbyMC21.Move_Check.put(p, false);
                    int second = Integer.parseInt(String.valueOf(Delay)) / 20;
                    p.sendMessage(net.md_5.bungee.api.ChatColor.GREEN + String.valueOf(second) + net.md_5.bungee.api.ChatColor.WHITE + "초 후에 " + net.md_5.bungee.api.ChatColor.LIGHT_PURPLE + "텔레포트 " + net.md_5.bungee.api.ChatColor.WHITE + "됩니다!\n움직이면 " + net.md_5.bungee.api.ChatColor.RED + "취소" + ChatColor.WHITE + "됩니다.");
                }
                Bukkit.getServer().getScheduler().scheduleSyncDelayedTask(TolobbyMC21.getPlugin(TolobbyMC21.class), () -> {
                    if (TolobbyMC21.Move_Check.get(p)) {
                        p.sendMessage("텔레포트가 취소되었습니다.");
                    } else if (Repeat_Time == Delay) {
                        p.sendMessage("텔레포트에 성공했습니다.");
                        p.teleport(Teleport_Location);
                        p.playSound(Teleport_Location, Sound.ENTITY_ENDERMAN_TELEPORT, 100, 1);
                    } else {
                        delayteleport(p, Teleport_Location, Delay, Repeat_Time + 1);
                    }
                }, 1L);
            }
        } catch (Exception Ex) {
            Ex.printStackTrace(System.err);
        }
    }
    
    public static int playNBS(List<Entity> entitylist, String name) {
        try {
            byte[] bytes;
            List<Player> players = entitylist.stream().filter(entity -> entity instanceof Player).map(entity -> (Player) entity).toList();
            File dir = new File(TolobbyMC21.getInstance().getDataFolder().getAbsolutePath() + "\\NBSFiles");
            if (!dir.exists()) dir.mkdir();
            File file = new File(TolobbyMC21.getInstance().getDataFolder().getAbsolutePath() + "\\NBSFiles\\" + name);
            bytes = Files.readAllBytes(file.toPath());
            Song song;
            if (name.endsWith(".nbs")) {
                song = NBSConverter.getSongFromBytes(bytes, name);
            } else if (name.endsWith(".mid") || name.endsWith(".midi")){
                song = MidiConverter.getSongFromBytes(bytes, name);
            } else {
                song = null;
            }
            int id = Bukkit.getScheduler().scheduleSyncRepeatingTask(TolobbyMC21.getInstance(), () -> {
                song.play();
                song.time += 50;
                if (song.finished()) return;
                while (song.reachedNextNote()) {
                    var note = song.getNextNote();
                    if (note == null) return;
                    for (Player player : players) {
                        player.playNote(player.getLocation(), note.getInstrument(), note.getNote());
                    }
                }
            }, 1L, 1L);
            TolobbyMC21.canceltask.add(new Tuple<>(song, id));
            return id;
        } catch (Throwable t) {
            throw new RuntimeException(t);
        }
    }

    public static Player nonePlayerwithname(String name) {
        return new Player() {
            @Override
            public @NotNull TriState getFrictionState() {
                return TriState.NOT_SET;
            }
            
            @Override
            public void setFrictionState(@NotNull TriState state) {
            
            }
            
            @Override
            public @UnmodifiableView @NotNull Iterable<? extends BossBar> activeBossBars() {
                return new ArrayList<>();
            }
            
            @Override
            public @NotNull Component displayName() {
                return Component.text(name);
            }

            @Override
            public void displayName(@Nullable Component displayName) {
            }

            @Override
            public @NotNull String getDisplayName() {
                return name;
            }

            @Override
            public void setDisplayName(@Nullable String name) {
            }

            @Override
            public void playerListName(@Nullable Component name) {
            }

            @Override
            public @NotNull Component playerListName() {
                return Component.text(name);
            }

            @Override
            public @Nullable Component playerListHeader() {
                return null;
            }

            @Override
            public @Nullable Component playerListFooter() {
                return null;
            }

            @Override
            public @NotNull String getPlayerListName() {
                return name;
            }

            @Override
            public void setPlayerListName(@Nullable String name) {
            }

            @Override
            public @Nullable String getPlayerListHeader() {
                return null;
            }

            @Override
            public @Nullable String getPlayerListFooter() {
                return null;
            }

            @Override
            public void setPlayerListHeader(@Nullable String header) {
            }

            @Override
            public void setPlayerListFooter(@Nullable String footer) {
            }

            @Override
            public void setPlayerListHeaderFooter(@Nullable String header, @Nullable String footer) {
            }

            @Override
            public void setCompassTarget(@NotNull Location loc) {
            }

            @Override
            public @NotNull Location getCompassTarget() {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0);
            }

            @Override
            public @Nullable InetSocketAddress getAddress() {
                return InetSocketAddress.createUnresolved("127.0.0.1", 25565);
            }

            @Override
            public @Nullable InetSocketAddress getHAProxyAddress() {
                return null;
            }

            @Override
            public boolean isTransferred() {
                return false;
            }

            @Override
            public @NotNull CompletableFuture<byte[]> retrieveCookie(@NotNull NamespacedKey namespacedKey) {
                return new CompletableFuture<>();
            }

            @Override
            public void storeCookie(@NotNull NamespacedKey namespacedKey, byte[] bytes) {

            }

            @Override
            public void transfer(@NotNull String s, int i) {

            }

            @Override
            public void sendRawMessage(@NotNull String message) {
            }

            @Override
            public void kickPlayer(@Nullable String message) {
            }

            @Override
            public void kick() {
            }

            @Override
            public void kick(@Nullable Component message) {
            }

            @Override
            public void kick(@Nullable Component message, PlayerKickEvent.@NotNull Cause cause) {
            }

            @Override
            public <E extends BanEntry<? super PlayerProfile>> @Nullable E ban(@Nullable String s, @Nullable Date date, @Nullable String s1, boolean b) {
                return null;
            }

            @Override
            public <E extends BanEntry<? super PlayerProfile>> @Nullable E ban(@Nullable String s, @Nullable Instant instant, @Nullable String s1, boolean b) {
                return null;
            }

            @Override
            public <E extends BanEntry<? super PlayerProfile>> @Nullable E ban(@Nullable String s, @Nullable Duration duration, @Nullable String s1, boolean b) {
                return null;
            }

            @Override
            public @Nullable BanEntry<InetAddress> banIp(@Nullable String s, @Nullable Date date, @Nullable String s1, boolean b) {
                return null;
            }

            @Override
            public @Nullable BanEntry<InetAddress> banIp(@Nullable String s, @Nullable Instant instant, @Nullable String s1, boolean b) {
                return null;
            }

            @Override
            public @Nullable BanEntry<InetAddress> banIp(@Nullable String s, @Nullable Duration duration, @Nullable String s1, boolean b) {
                return null;
            }

            @Override
            public void chat(@NotNull String msg) {
            }

            @Override
            public boolean performCommand(@NotNull String command) {
                return true;
            }

            @Override
            public boolean isOnGround() {
                return true;
            }

            @Override
            public boolean isSneaking() {
                return false;
            }

            @Override
            public void setSneaking(boolean sneak) {
            }

            @Override
            public void setPose(@NotNull Pose pose, boolean b) {

            }

            @Override
            public boolean hasFixedPose() {
                return false;
            }

            @Override
            public boolean isSprinting() {
                return false;
            }

            @Override
            public void setSprinting(boolean sprinting) {
            }

            @Override
            public void saveData() {
            }

            @Override
            public void loadData() {
            }

            @Override
            public void setSleepingIgnored(boolean isSleeping) {
            }

            @Override
            public boolean isSleepingIgnored() {
                return false;
            }

            @Override
            public @Nullable Location getBedSpawnLocation() {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0);
            }

            @Override
            public @Nullable Location getRespawnLocation() {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0);
            }

            @Override
            public void setBedSpawnLocation(@Nullable Location location) {
            }

            @Override
            public void setRespawnLocation(@Nullable Location location) {

            }

            @Override
            public void setBedSpawnLocation(@Nullable Location location, boolean force) {
            }

            @Override
            public void setRespawnLocation(@Nullable Location location, boolean b) {

            }

            @Override
            public void playNote(@NotNull Location loc, byte instrument, byte note) {
            }

            @Override
            public void playNote(@NotNull Location loc, @NotNull Instrument instrument, @NotNull Note note) {
            }

            @Override
            public void playSound(@NotNull Location location, @NotNull Sound sound, float volume, float pitch) {
            }

            @Override
            public void playSound(@NotNull Location location, @NotNull String sound, float volume, float pitch) {
            }

            @Override
            public void playSound(@NotNull Location location, @NotNull Sound sound, @NotNull SoundCategory category, float volume, float pitch) {
            }

            @Override
            public void playSound(@NotNull Location location, @NotNull String sound, @NotNull SoundCategory category, float volume, float pitch) {
            }

            @Override
            public void playSound(@NotNull Location location, @NotNull Sound sound, @NotNull SoundCategory soundCategory, float v, float v1, long l) {

            }

            @Override
            public void playSound(@NotNull Location location, @NotNull String s, @NotNull SoundCategory soundCategory, float v, float v1, long l) {

            }

            @Override
            public void playSound(@NotNull Entity entity, @NotNull Sound sound, float volume, float pitch) {
            }
            
            @Override
            public void playSound(@NotNull Entity entity, @NotNull String sound, float volume, float pitch) {
            
            }
            
            @Override
            public void playSound(@NotNull Entity entity, @NotNull Sound sound, @NotNull SoundCategory category, float volume, float pitch) {
            }
            
            @Override
            public void playSound(@NotNull Entity entity, @NotNull String sound, @NotNull SoundCategory category, float volume, float pitch) {
            
            }

            @Override
            public void playSound(@NotNull Entity entity, @NotNull Sound sound, @NotNull SoundCategory soundCategory, float v, float v1, long l) {

            }

            @Override
            public void playSound(@NotNull Entity entity, @NotNull String s, @NotNull SoundCategory soundCategory, float v, float v1, long l) {

            }

            @Override
            public void stopSound(@NotNull Sound sound) {
            }

            @Override
            public void stopSound(@NotNull String sound) {
            }

            @Override
            public void stopSound(@NotNull Sound sound, @Nullable SoundCategory category) {
            }

            @Override
            public void stopSound(@NotNull String sound, @Nullable SoundCategory category) {
            }

            @Override
            public void stopSound(@NotNull SoundCategory category) {
            }

            @Override
            public void stopAllSounds() {
            }

            @Override
            public void playEffect(@NotNull Location loc, @NotNull Effect effect, int data) {
            }

            @Override
            public <T> void playEffect(@NotNull Location loc, @NotNull Effect effect, @Nullable T data) {
            }

            @Override
            public boolean breakBlock(@NotNull Block block) {
                return false;
            }

            @Override
            public void sendBlockChange(@NotNull Location loc, @NotNull Material material, byte data) {
            }

            @Override
            public void sendBlockChange(@NotNull Location loc, @NotNull BlockData block) {
            }
            
            @Override
            public void sendBlockChanges(@NotNull Collection<BlockState> blocks) {
            
            }
            
            @Override
            public void sendBlockChanges(@NotNull Collection<BlockState> blocks, boolean suppressLightUpdates) {
            
            }
            
            @Override
            public void sendBlockDamage(@NotNull Location loc, float progress) {
            }

            @Override
            public void sendMultiBlockChange(@NotNull Map<? extends Position, BlockData> map) {

            }

            @Override
            public void sendBlockDamage(@NotNull Location loc, float progress, @NotNull Entity source) {
            
            }
            
            @Override
            public void sendBlockDamage(@NotNull Location loc, float progress, int sourceId) {
            
            }

            @Override
            public void sendEquipmentChange(@NotNull LivingEntity entity, @NotNull EquipmentSlot slot, @Nullable ItemStack item) {
            }
            
            @Override
            public void sendEquipmentChange(@NotNull LivingEntity entity, @NotNull Map<EquipmentSlot, ItemStack> items) {
            
            }
            
            @Override
            public void sendSignChange(@NotNull Location loc, @Nullable List<? extends Component> lines, @NotNull DyeColor dyeColor, boolean hasGlowingText) throws IllegalArgumentException {
            
            }

            @Override
            public void sendSignChange(@NotNull Location loc, @Nullable String[] lines) throws IllegalArgumentException {
            }

            @Override
            public void sendSignChange(@NotNull Location loc, @Nullable String[] lines, @NotNull DyeColor dyeColor) throws IllegalArgumentException {
            }

            @Override
            public void sendSignChange(@NotNull Location loc, @Nullable String[] lines, @NotNull DyeColor dyeColor, boolean hasGlowingText) throws IllegalArgumentException {
            }

            @Override
            public void sendBlockUpdate(@NotNull Location location, @NotNull TileState tileState) throws IllegalArgumentException {

            }

            @Override
            public void sendPotionEffectChange(@NotNull LivingEntity livingEntity, @NotNull PotionEffect potionEffect) {

            }

            @Override
            public void sendPotionEffectChangeRemove(@NotNull LivingEntity livingEntity, @NotNull PotionEffectType potionEffectType) {

            }

            @Override
            public void sendMap(@NotNull MapView map) {
            }
            
            @Override
            public void showWinScreen() {
            
            }
            
            @Override
            public boolean hasSeenWinScreen() {
                return false;
            }
            
            @Override
            public void setHasSeenWinScreen(boolean hasSeenWinScreen) {
            
            }
            
            @Override
            public void sendActionBar(@NotNull String message) {
            }

            @Override
            public void sendActionBar(char alternateChar, @NotNull String message) {
            }

            @Override
            public void sendActionBar(@NotNull BaseComponent... message) {
            }

            @Override
            public void setPlayerListHeaderFooter(@Nullable BaseComponent[] header, @Nullable BaseComponent[] footer) {

            }

            @Override
            public void setPlayerListHeaderFooter(@Nullable BaseComponent header, @Nullable BaseComponent footer) {

            }

            @Override
            public void setTitleTimes(int fadeInTicks, int stayTicks, int fadeOutTicks) {

            }

            @Override
            public void setSubtitle(BaseComponent[] subtitle) {

            }

            @Override
            public void setSubtitle(BaseComponent subtitle) {

            }

            @Override
            public void showTitle(@Nullable BaseComponent[] title) {

            }

            @Override
            public void showTitle(@Nullable BaseComponent title) {

            }

            @Override
            public void showTitle(@Nullable BaseComponent[] title, @Nullable BaseComponent[] subtitle, int fadeInTicks, int stayTicks, int fadeOutTicks) {

            }

            @Override
            public void showTitle(@Nullable BaseComponent title, @Nullable BaseComponent subtitle, int fadeInTicks, int stayTicks, int fadeOutTicks) {

            }

            @Override
            public void sendTitle(@NotNull Title title) {

            }

            @Override
            public void updateTitle(@NotNull Title title) {

            }

            @Override
            public void hideTitle() {

            }
            
            @Override
            public void sendHurtAnimation(float yaw) {
            
            }

            @Override
            public void sendLinks(@NotNull ServerLinks serverLinks) {

            }

            @Override
            public void addCustomChatCompletions(@NotNull Collection<String> completions) {
            
            }
            
            @Override
            public void removeCustomChatCompletions(@NotNull Collection<String> completions) {
            
            }
            
            @Override
            public void setCustomChatCompletions(@NotNull Collection<String> completions) {
            
            }
            
            @Override
            public void updateInventory() {

            }

            @Override
            public @Nullable GameMode getPreviousGameMode() {
                return GameMode.SPECTATOR;
            }

            @Override
            public void setPlayerTime(long time, boolean relative) {

            }

            @Override
            public long getPlayerTime() {
                return 0;
            }

            @Override
            public long getPlayerTimeOffset() {
                return 0;
            }

            @Override
            public boolean isPlayerTimeRelative() {
                return false;
            }

            @Override
            public void resetPlayerTime() {

            }

            @Override
            public void setPlayerWeather(@NotNull WeatherType type) {

            }

            @Override
            public @Nullable WeatherType getPlayerWeather() {
                return WeatherType.CLEAR;
            }

            @Override
            public void resetPlayerWeather() {

            }
            
            @Override
            public int getExpCooldown() {
                return 0;
            }
            
            @Override
            public void setExpCooldown(int ticks) {
            
            }
            
            @Override
            public void giveExp(int amount, boolean applyMending) {

            }

            @Override
            public int applyMending(int amount) {
                return 0;
            }

            @Override
            public void giveExpLevels(int amount) {

            }

            @Override
            public float getExp() {
                return 0;
            }

            @Override
            public void setExp(float exp) {

            }

            @Override
            public int getLevel() {
                return 0;
            }

            @Override
            public void setLevel(int level) {

            }

            @Override
            public int getTotalExperience() {
                return 0;
            }

            @Override
            public void setTotalExperience(int exp) {

            }

            @Override
            public @Range(from = 0L, to = 2147483647L) int calculateTotalExperiencePoints() {
                return 0;
            }

            @Override
            public void setExperienceLevelAndProgress(@Range(from = 0L, to = 2147483647L) int i) {

            }

            @Override
            public int getExperiencePointsNeededForNextLevel() {
                return 0;
            }

            @Override
            public void sendExperienceChange(float progress) {

            }

            @Override
            public void sendExperienceChange(float progress, int level) {

            }

            @Override
            public boolean getAllowFlight() {
                return true;
            }

            @Override
            public void setAllowFlight(boolean flight) {

            }
            
            @Override
            public void setFlyingFallDamage(@NotNull TriState flyingFallDamage) {
            
            }
            
            @Override
            public @NotNull TriState hasFlyingFallDamage() {
                return TriState.NOT_SET;
            }
            
            @Override
            public void hidePlayer(@NotNull Player player) {

            }

            @Override
            public void hidePlayer(@NotNull Plugin plugin, @NotNull Player player) {

            }

            @Override
            public void showPlayer(@NotNull Player player) {

            }

            @Override
            public void showPlayer(@NotNull Plugin plugin, @NotNull Player player) {

            }

            @Override
            public boolean canSee(@NotNull Player player) {
                return false;
            }

            @Override
            public void hideEntity(@NotNull Plugin plugin, @NotNull Entity entity) {

            }

            @Override
            public void showEntity(@NotNull Plugin plugin, @NotNull Entity entity) {

            }

            @Override
            public boolean canSee(@NotNull Entity entity) {
                return false;
            }

            @Override
            public boolean isListed(@NotNull Player player) {
                return false;
            }

            @Override
            public boolean unlistPlayer(@NotNull Player player) {
                return false;
            }

            @Override
            public boolean listPlayer(@NotNull Player player) {
                return false;
            }

            @Override
            public boolean isFlying() {
                return false;
            }

            @Override
            public void setFlying(boolean value) {

            }

            @Override
            public void setFlySpeed(float value) throws IllegalArgumentException {

            }

            @Override
            public void setWalkSpeed(float value) throws IllegalArgumentException {

            }

            @Override
            public float getFlySpeed() {
                return 0;
            }

            @Override
            public float getWalkSpeed() {
                return 0;
            }

            @Override
            public void setTexturePack(@NotNull String url) {

            }

            @Override
            public void setResourcePack(@NotNull String url) {

            }

            @Override
            public void setResourcePack(@NotNull String url, byte[] hash) {

            }

            @Override
            public void setResourcePack(@NotNull String url, byte[] hash, @Nullable String prompt) {

            }

            @Override
            public void setResourcePack(@NotNull String url, byte[] hash, boolean force) {

            }

            @Override
            public void setResourcePack(@NotNull String url, byte[] hash, @Nullable String prompt, boolean force) {

            }

            @Override
            public void setResourcePack(@NotNull String url, byte @Nullable [] hash, @Nullable Component prompt, boolean force) {

            }

            @Override
            public void setResourcePack(@NotNull UUID uuid, @NotNull String s, byte[] bytes, @Nullable String s1, boolean b) {

            }

            @Override
            public void setResourcePack(@NotNull UUID uuid, @NotNull String s, byte @Nullable [] bytes, @Nullable Component component, boolean b) {

            }

            @Override
            public @NotNull Scoreboard getScoreboard() {
                return Bukkit.getScoreboardManager().getMainScoreboard();
            }

            @Override
            public void setScoreboard(@NotNull Scoreboard scoreboard) throws IllegalArgumentException, IllegalStateException {
            }

            @Override
            public @Nullable WorldBorder getWorldBorder() {
                return Bukkit.getWorlds().getFirst().getWorldBorder();
            }

            @Override
            public void setWorldBorder(@Nullable WorldBorder border) {

            }

            @Override
            public boolean isHealthScaled() {
                return false;
            }

            @Override
            public void setHealthScaled(boolean scale) {

            }

            @Override
            public void setHealthScale(double scale) throws IllegalArgumentException {

            }

            @Override
            public double getHealthScale() {
                return 0;
            }

            @Override
            public void sendHealthUpdate(double health, int foodLevel, float saturationLevel) {

            }

            @Override
            public void sendHealthUpdate() {

            }

            @Override
            public @Nullable Entity getSpectatorTarget() {
                return null;
            }

            @Override
            public void setSpectatorTarget(@Nullable Entity entity) {

            }

            @Override
            public void sendTitle(@Nullable String title, @Nullable String subtitle) {

            }

            @Override
            public void sendTitle(@Nullable String title, @Nullable String subtitle, int fadeIn, int stay, int fadeOut) {

            }

            @Override
            public void resetTitle() {

            }

            @Override
            public void spawnParticle(@NotNull Particle particle, @NotNull Location location, int count) {

            }

            @Override
            public void spawnParticle(@NotNull Particle particle, double x, double y, double z, int count) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, @NotNull Location location, int count, @Nullable T data) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, double x, double y, double z, int count, @Nullable T data) {

            }

            @Override
            public void spawnParticle(@NotNull Particle particle, @NotNull Location location, int count, double offsetX, double offsetY, double offsetZ) {

            }

            @Override
            public void spawnParticle(@NotNull Particle particle, double x, double y, double z, int count, double offsetX, double offsetY, double offsetZ) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, @NotNull Location location, int count, double offsetX, double offsetY, double offsetZ, @Nullable T data) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, double x, double y, double z, int count, double offsetX, double offsetY, double offsetZ, @Nullable T data) {

            }

            @Override
            public void spawnParticle(@NotNull Particle particle, @NotNull Location location, int count, double offsetX, double offsetY, double offsetZ, double extra) {

            }

            @Override
            public void spawnParticle(@NotNull Particle particle, double x, double y, double z, int count, double offsetX, double offsetY, double offsetZ, double extra) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, @NotNull Location location, int count, double offsetX, double offsetY, double offsetZ, double extra, @Nullable T data) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, double x, double y, double z, int count, double offsetX, double offsetY, double offsetZ, double extra, @Nullable T data) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, @NotNull Location location, int i, double v, double v1, double v2, double v3, @Nullable T t, boolean b) {

            }

            @Override
            public <T> void spawnParticle(@NotNull Particle particle, double v, double v1, double v2, int i, double v3, double v4, double v5, double v6, @Nullable T t, boolean b) {

            }

            @Override
            public @NotNull AdvancementProgress getAdvancementProgress(@NotNull Advancement advancement) {
                return new AdvancementProgress() {
                    @Override
                    public @NotNull Advancement getAdvancement() {
                        return advancement;
                    }

                    @Override
                    public boolean isDone() {
                        return false;
                    }

                    @Override
                    public boolean awardCriteria(@NotNull String criteria) {
                        return false;
                    }

                    @Override
                    public boolean revokeCriteria(@NotNull String criteria) {
                        return false;
                    }

                    @Override
                    public @Nullable Date getDateAwarded(@NotNull String criteria) {
                        return null;
                    }

                    @Override
                    public @NotNull Collection<String> getRemainingCriteria() {
                        return new ArrayList<>();
                    }

                    @Override
                    public @NotNull Collection<String> getAwardedCriteria() {
                        return new ArrayList<>();
                    }
                };
            }

            @Override
            public int getClientViewDistance() {
                return 0;
            }

            @Override
            public @NotNull Locale locale() {
                return Locale.KOREA;
            }

            @Override
            public int getPing() {
                return 0;
            }

            @Override
            public @NotNull String getLocale() {
                return "KR";
            }

            @Override
            public boolean getAffectsSpawning() {
                return false;
            }

            @Override
            public void setAffectsSpawning(boolean affects) {

            }

            @Override
            public int getViewDistance() {
                return 0;
            }

            @Override
            public void setViewDistance(int viewDistance) {

            }

            @Override
            public int getSimulationDistance() {
                return 0;
            }

            @Override
            public void setSimulationDistance(int simulationDistance) {

            }

            @Override
            public int getNoTickViewDistance() {
                return 0;
            }

            @Override
            public void setNoTickViewDistance(int viewDistance) {

            }

            @Override
            public int getSendViewDistance() {
                return 0;
            }

            @Override
            public void setSendViewDistance(int viewDistance) {

            }

            @Override
            public void updateCommands() {

            }

            @Override
            public void openBook(@NotNull ItemStack book) {

            }

            @Override
            public void openSign(@NotNull Sign sign) {

            }
            
            @Override
            public void openSign(@NotNull Sign sign, @NotNull Side side) {
            
            }
            
            @Override
            public void showDemoScreen() {

            }

            @Override
            public boolean isAllowingServerListings() {
                return false;
            }

            @Override
            public void setResourcePack(@NotNull String url, @NotNull String hash) {

            }

            @Override
            public void setResourcePack(@NotNull String url, @NotNull String hash, boolean required) {

            }

            @Override
            public void setResourcePack(@NotNull String url, @NotNull String hash, boolean required, @Nullable Component resourcePackPrompt) {

            }

            @Override
            public PlayerResourcePackStatusEvent.@Nullable Status getResourcePackStatus() {
                return null;
            }

            @Override
            public @Nullable String getResourcePackHash() {
                return null;
            }

            @Override
            public boolean hasResourcePack() {
                return false;
            }

            @Override
            public void addResourcePack(@NotNull UUID uuid, @NotNull String s, byte[] bytes, @Nullable String s1, boolean b) {

            }

            @Override
            public void removeResourcePack(@NotNull UUID uuid) {

            }

            @Override
            public void removeResourcePacks() {

            }

            @Override
            public @NotNull PlayerProfile getPlayerProfile() {
                return new PlayerProfile() {
                    @Override
                    public @Nullable String getName() {
                        return name;
                    }

                    @Override
                    public @NotNull String setName(@Nullable String name1) {
                        return name;
                    }

                    @Override
                    public @Nullable UUID getId() {
                        return null;
                    }

                    @Override
                    public @Nullable UUID setId(@Nullable UUID uuid) {
                        return null;
                    }

                    @Override
                    public @NotNull PlayerTextures getTextures() {
                        return new PlayerTextures() {
                            @Override
                            public boolean isEmpty() {
                                return false;
                            }

                            @Override
                            public void clear() {

                            }

                            @Override
                            public @Nullable URL getSkin() {
                                return null;
                            }

                            @Override
                            public void setSkin(@Nullable URL skinUrl) {

                            }

                            @Override
                            public void setSkin(@Nullable URL skinUrl, @Nullable SkinModel skinModel) {

                            }

                            @Override
                            public @NotNull SkinModel getSkinModel() {
                                return SkinModel.CLASSIC;
                            }

                            @Override
                            public @Nullable URL getCape() {
                                return null;
                            }

                            @Override
                            public void setCape(@Nullable URL capeUrl) {

                            }

                            @Override
                            public long getTimestamp() {
                                return 0;
                            }

                            @Override
                            public boolean isSigned() {
                                return false;
                            }
                        };
                    }

                    @Override
                    public void setTextures(@Nullable PlayerTextures textures) {

                    }

                    @Override
                    public @NotNull Set<ProfileProperty> getProperties() {
                        return new HashSet<>();
                    }

                    @Override
                    public boolean hasProperty(@Nullable String property) {
                        return false;
                    }

                    @Override
                    public void setProperty(@NotNull ProfileProperty property) {

                    }

                    @Override
                    public void setProperties(@NotNull Collection<ProfileProperty> properties) {

                    }

                    @Override
                    public boolean removeProperty(@Nullable String property) {
                        return false;
                    }

                    @Override
                    public void clearProperties() {

                    }

                    @Override
                    public boolean isComplete() {
                        return false;
                    }

                    @Override
                    public boolean completeFromCache() {
                        return false;
                    }

                    @Override
                    public boolean completeFromCache(boolean onlineMode) {
                        return false;
                    }

                    @Override
                    public boolean completeFromCache(boolean lookupUUID, boolean onlineMode) {
                        return false;
                    }

                    @Override
                    public boolean complete(boolean textures) {
                        return false;
                    }

                    @Override
                    public boolean complete(boolean textures, boolean onlineMode) {
                        return false;
                    }

                    @Override
                    public @NotNull CompletableFuture<PlayerProfile> update() {
                        return new CompletableFuture<>();
                    }

                    @Override
                    public @Nullable UUID getUniqueId() {
                        return null;
                    }

                    @Override
                    public org.bukkit.profile.@NotNull PlayerProfile clone() {
                        try {
                            return (org.bukkit.profile.PlayerProfile) super.clone();
                        } catch (CloneNotSupportedException e) {
                            throw new RuntimeException(e);
                        }
                    }

                    @Override
                    public @NotNull Map<String, Object> serialize() {
                        return new HashMap<>();
                    }
                };
            }

            @Override
            public void setPlayerProfile(@NotNull PlayerProfile profile) {
            }

            @Override
            public float getCooldownPeriod() {
                return 0;
            }

            @Override
            public float getCooledAttackStrength(float adjustTicks) {
                return 0;
            }

            @Override
            public void resetCooldown() {

            }

            @Override
            public <T> @NotNull T getClientOption(@NotNull ClientOption<T> option) {
                return (T) ClientOption.CHAT_VISIBILITY;
            }

            @Override
            public @Nullable Firework boostElytra(@NotNull ItemStack firework) {
                return Bukkit.getWorlds().getFirst().spawn(new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0), Firework.class);
            }

            @Override
            public void sendOpLevel(byte level) {

            }
            
            @Override
            public void addAdditionalChatCompletions(@NotNull Collection<String> completions) {
            
            }
            
            @Override
            public void removeAdditionalChatCompletions(@NotNull Collection<String> completions) {
            
            }
            
            @Override
            public @Nullable String getClientBrandName() {
                return null;
            }

            @Override
            public void setRotation(float yaw, float pitch) {

            }
            
            @Override
            public boolean teleport(@NotNull Location location, PlayerTeleportEvent.@NotNull TeleportCause cause, @NotNull TeleportFlag @NotNull ... teleportFlags) {
                return false;
            }

            @Override
            public void lookAt(double x, double y, double z, @NotNull LookAnchor playerAnchor) {

            }

            @Override
            public void lookAt(@NotNull Entity entity, @NotNull LookAnchor playerAnchor, @NotNull LookAnchor entityAnchor) {

            }
            
            @Override
            public void showElderGuardian(boolean silent) {
            
            }
            
            @Override
            public int getWardenWarningCooldown() {
                return 0;
            }
            
            @Override
            public void setWardenWarningCooldown(int cooldown) {
            
            }
            
            @Override
            public int getWardenTimeSinceLastWarning() {
                return 0;
            }
            
            @Override
            public void setWardenTimeSinceLastWarning(int time) {
            
            }
            
            @Override
            public int getWardenWarningLevel() {
                return 0;
            }
            
            @Override
            public void setWardenWarningLevel(int warningLevel) {
            
            }
            
            @Override
            public void increaseWardenWarningLevel() {
            
            }

            @Override
            public @NotNull Duration getIdleDuration() {
                return null;
            }

            @Override
            public void resetIdleDuration() {

            }

            @Override
            public @NotNull @Unmodifiable Set<Long> getSentChunkKeys() {
                return null;
            }

            @Override
            public @NotNull @Unmodifiable Set<Chunk> getSentChunks() {
                return null;
            }

            @Override
            public boolean isChunkSent(long l) {
                return false;
            }

            @Override
            public @NotNull Spigot spigot() {
                return new Spigot();
            }

            @Override
            public int getProtocolVersion() {
                return 0;
            }

            @Override
            public @Nullable InetSocketAddress getVirtualHost() {
                return InetSocketAddress.createUnresolved("127.0.0.1", 25565);
            }

            @Override
            public boolean isOnline() {
                return true;
            }

            @Override
            public boolean isConnected() {
                return false;
            }

            @Override
            public boolean isBanned() {
                return false;
            }

            @Override
            public <E extends BanEntry<? super PlayerProfile>> @Nullable E ban(@Nullable String s, @Nullable Date date, @Nullable String s1) {
                return null;
            }

            @Override
            public <E extends BanEntry<? super PlayerProfile>> @Nullable E ban(@Nullable String s, @Nullable Instant instant, @Nullable String s1) {
                return null;
            }

            @Override
            public <E extends BanEntry<? super PlayerProfile>> @Nullable E ban(@Nullable String s, @Nullable Duration duration, @Nullable String s1) {
                return null;
            }

            @Override
            public boolean isWhitelisted() {
                return false;
            }

            @Override
            public void setWhitelisted(boolean value) {

            }

            @Override
            public @Nullable Player getPlayer() {
                return this;
            }

            @Override
            public long getFirstPlayed() {
                return 0;
            }

            @Override
            public long getLastPlayed() {
                return 0;
            }

            @Override
            public boolean hasPlayedBefore() {
                return true;
            }

            @Override
            public long getLastLogin() {
                return 0;
            }

            @Override
            public long getLastSeen() {
                return 0;
            }

            @Override
            public void incrementStatistic(@NotNull Statistic statistic) throws IllegalArgumentException {

            }

            @Override
            public void decrementStatistic(@NotNull Statistic statistic) throws IllegalArgumentException {

            }

            @Override
            public void incrementStatistic(@NotNull Statistic statistic, int amount) throws IllegalArgumentException {

            }

            @Override
            public void decrementStatistic(@NotNull Statistic statistic, int amount) throws IllegalArgumentException {

            }

            @Override
            public void setStatistic(@NotNull Statistic statistic, int newValue) throws IllegalArgumentException {

            }

            @Override
            public int getStatistic(@NotNull Statistic statistic) throws IllegalArgumentException {
                return 0;
            }

            @Override
            public void incrementStatistic(@NotNull Statistic statistic, @NotNull Material material) throws IllegalArgumentException {

            }

            @Override
            public void decrementStatistic(@NotNull Statistic statistic, @NotNull Material material) throws IllegalArgumentException {

            }

            @Override
            public int getStatistic(@NotNull Statistic statistic, @NotNull Material material) throws IllegalArgumentException {
                return 0;
            }

            @Override
            public void incrementStatistic(@NotNull Statistic statistic, @NotNull Material material, int amount) throws IllegalArgumentException {

            }

            @Override
            public void decrementStatistic(@NotNull Statistic statistic, @NotNull Material material, int amount) throws IllegalArgumentException {

            }

            @Override
            public void setStatistic(@NotNull Statistic statistic, @NotNull Material material, int newValue) throws IllegalArgumentException {

            }

            @Override
            public void incrementStatistic(@NotNull Statistic statistic, @NotNull EntityType entityType) throws IllegalArgumentException {

            }

            @Override
            public void decrementStatistic(@NotNull Statistic statistic, @NotNull EntityType entityType) throws IllegalArgumentException {

            }

            @Override
            public int getStatistic(@NotNull Statistic statistic, @NotNull EntityType entityType) throws IllegalArgumentException {
                return 0;
            }

            @Override
            public void incrementStatistic(@NotNull Statistic statistic, @NotNull EntityType entityType, int amount) throws IllegalArgumentException {

            }

            @Override
            public void decrementStatistic(@NotNull Statistic statistic, @NotNull EntityType entityType, int amount) {

            }

            @Override
            public void setStatistic(@NotNull Statistic statistic, @NotNull EntityType entityType, int newValue) {

            }

            @Override
            public @NotNull Map<String, Object> serialize() {
                return new HashMap<>();
            }

            @Override
            public boolean isConversing() {
                return false;
            }

            @Override
            public void acceptConversationInput(@NotNull String input) {

            }

            @Override
            public boolean beginConversation(@NotNull Conversation conversation) {
                return false;
            }

            @Override
            public void abandonConversation(@NotNull Conversation conversation) {

            }

            @Override
            public void abandonConversation(@NotNull Conversation conversation, @NotNull ConversationAbandonedEvent details) {

            }

            @Override
            public void sendRawMessage(@Nullable UUID sender, @NotNull String message) {

            }

            @Override
            public @NotNull EntityEquipment getEquipment() {
                return new EntityEquipment() {
                    @Override
                    public void setItem(@NotNull EquipmentSlot slot, @Nullable ItemStack item) {

                    }

                    @Override
                    public void setItem(@NotNull EquipmentSlot slot, @Nullable ItemStack item, boolean silent) {

                    }

                    @Override
                    public @NotNull ItemStack getItem(@NotNull EquipmentSlot slot) {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public @NotNull ItemStack getItemInMainHand() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public void setItemInMainHand(@Nullable ItemStack item) {

                    }

                    @Override
                    public void setItemInMainHand(@Nullable ItemStack item, boolean silent) {

                    }

                    @Override
                    public @NotNull ItemStack getItemInOffHand() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public void setItemInOffHand(@Nullable ItemStack item) {

                    }

                    @Override
                    public void setItemInOffHand(@Nullable ItemStack item, boolean silent) {

                    }

                    @Override
                    public @NotNull ItemStack getItemInHand() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public void setItemInHand(@Nullable ItemStack stack) {

                    }

                    @Override
                    public ItemStack getHelmet() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public void setHelmet(@Nullable ItemStack helmet) {

                    }

                    @Override
                    public void setHelmet(@Nullable ItemStack helmet, boolean silent) {

                    }

                    @Override
                    public ItemStack getChestplate() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public void setChestplate(@Nullable ItemStack chestplate) {

                    }

                    @Override
                    public void setChestplate(@Nullable ItemStack chestplate, boolean silent) {

                    }

                    @Override
                    public ItemStack getLeggings() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public void setLeggings(@Nullable ItemStack leggings) {

                    }

                    @Override
                    public void setLeggings(@Nullable ItemStack leggings, boolean silent) {

                    }

                    @Override
                    public ItemStack getBoots() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public void setBoots(@Nullable ItemStack boots) {

                    }

                    @Override
                    public void setBoots(@Nullable ItemStack boots, boolean silent) {

                    }

                    @Override
                    public ItemStack @NotNull [] getArmorContents() {
                        return new ItemStack[4];
                    }

                    @Override
                    public void setArmorContents(@NotNull ItemStack[] items) {

                    }

                    @Override
                    public void clear() {

                    }

                    @Override
                    public float getItemInHandDropChance() {
                        return 0;
                    }

                    @Override
                    public void setItemInHandDropChance(float chance) {

                    }

                    @Override
                    public float getItemInMainHandDropChance() {
                        return 0;
                    }

                    @Override
                    public void setItemInMainHandDropChance(float chance) {

                    }

                    @Override
                    public float getItemInOffHandDropChance() {
                        return 0;
                    }

                    @Override
                    public void setItemInOffHandDropChance(float chance) {

                    }

                    @Override
                    public float getHelmetDropChance() {
                        return 0;
                    }

                    @Override
                    public void setHelmetDropChance(float chance) {

                    }

                    @Override
                    public float getChestplateDropChance() {
                        return 0;
                    }

                    @Override
                    public void setChestplateDropChance(float chance) {

                    }

                    @Override
                    public float getLeggingsDropChance() {
                        return 0;
                    }

                    @Override
                    public void setLeggingsDropChance(float chance) {

                    }

                    @Override
                    public float getBootsDropChance() {
                        return 0;
                    }

                    @Override
                    public void setBootsDropChance(float chance) {

                    }

                    @Override
                    public @NotNull Entity getHolder() {
                        return player;
                    }

                    @Override
                    public float getDropChance(@NotNull EquipmentSlot slot) {
                        return 0;
                    }

                    @Override
                    public void setDropChance(@NotNull EquipmentSlot slot, float chance) {

                    }
                };
            }

            @Override
            public @NotNull String getName() {
                return name;
            }

            @Override
            public @NotNull PlayerInventory getInventory() {
                return (PlayerInventory) Bukkit.createInventory(null, InventoryType.PLAYER, name + "의 보관함");
            }

            @Override
            public @NotNull Inventory getEnderChest() {
                return Bukkit.createInventory(null, InventoryType.ENDER_CHEST, name + "의 엔더 상자");
            }

            @Override
            public @NotNull MainHand getMainHand() {
                return MainHand.RIGHT;
            }

            @Override
            public boolean setWindowProperty(InventoryView.@NotNull Property prop, int value) {
                return false;
            }
            
            @Override
            public int getEnchantmentSeed() {
                return 0;
            }
            
            @Override
            public void setEnchantmentSeed(int seed) {
            
            }
            
            final Player player = this;

            @Override
            public @NotNull InventoryView getOpenInventory() {
                return new InventoryView() {
                    @Override
                    public @NotNull Inventory getTopInventory() {
                        return Bukkit.createInventory(null, 54, "");
                    }

                    @Override
                    public @NotNull Inventory getBottomInventory() {
                        return Bukkit.createInventory(null, 54, "");
                    }

                    @Override
                    public @NotNull HumanEntity getPlayer() {
                        return player;
                    }

                    @Override
                    public @NotNull InventoryType getType() {
                        return InventoryType.PLAYER;
                    }

                    @Override
                    public void setItem(int i, @Nullable ItemStack itemStack) {

                    }

                    @Override
                    public @Nullable ItemStack getItem(int i) {
                        return null;
                    }

                    @Override
                    public void setCursor(@Nullable ItemStack itemStack) {

                    }

                    @Override
                    public @NotNull ItemStack getCursor() {
                        return new ItemStack(Material.AIR);
                    }

                    @Override
                    public @Nullable Inventory getInventory(int i) {
                        return null;
                    }

                    @Override
                    public int convertSlot(int i) {
                        return 0;
                    }

                    @NotNull
                    @Override
                    public InventoryType.SlotType getSlotType(int i) {
                        return InventoryType.SlotType.CONTAINER;
                    }

                    @Override
                    public void close() {

                    }

                    @Override
                    public int countSlots() {
                        return 0;
                    }

                    @Override
                    public boolean setProperty(@NotNull InventoryView.Property property, int i) {
                        return false;
                    }

                    @Override
                    public @NotNull String getTitle() {
                        return "";
                    }
                    
                    @Override
                    public @NotNull String getOriginalTitle() {
                        return "";
                    }
                    
                    @Override
                    public void setTitle(@NotNull String title) {
                    
                    }
                };
            }

            @Override
            public @Nullable InventoryView openInventory(@NotNull Inventory inventory) {
                return null;
            }

            @Override
            public @Nullable InventoryView openWorkbench(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openEnchanting(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public void openInventory(@NotNull InventoryView inventory) {

            }

            @Override
            public @Nullable InventoryView openMerchant(@NotNull Villager trader, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openMerchant(@NotNull Merchant merchant, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openAnvil(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openCartographyTable(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openGrindstone(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openLoom(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openSmithingTable(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public @Nullable InventoryView openStonecutter(@Nullable Location location, boolean force) {
                return null;
            }

            @Override
            public void closeInventory() {

            }

            @Override
            public void closeInventory(InventoryCloseEvent.@NotNull Reason reason) {

            }

            @Override
            public @NotNull ItemStack getItemInHand() {
                return new ItemStack(Material.AIR);
            }

            @Override
            public void setItemInHand(@Nullable ItemStack item) {

            }

            @Override
            public @NotNull ItemStack getItemOnCursor() {
                return new ItemStack(Material.AIR);
            }

            @Override
            public void setItemOnCursor(@Nullable ItemStack item) {

            }

            @Override
            public boolean hasCooldown(@NotNull Material material) {
                return false;
            }

            @Override
            public int getCooldown(@NotNull Material material) {
                return 0;
            }

            @Override
            public void setCooldown(@NotNull Material material, int ticks) {

            }

            @Override
            public boolean isDeeplySleeping() {
                return false;
            }

            @Override
            public int getSleepTicks() {
                return 0;
            }

            @Override
            public @Nullable Location getPotentialBedLocation() {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0);
            }

            @Override
            public @Nullable FishHook getFishHook() {
                return null;
            }

            @Override
            public boolean sleep(@NotNull Location location, boolean force) {
                return false;
            }

            @Override
            public void wakeup(boolean setSpawnLocation) {

            }

            @Override
            public @NotNull Location getBedLocation() {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0);
            }

            @Override
            public @NotNull GameMode getGameMode() {
                return GameMode.CREATIVE;
            }

            @Override
            public void setGameMode(@NotNull GameMode mode) {

            }

            @Override
            public boolean isBlocking() {
                return false;
            }

            @Override
            public boolean isHandRaised() {
                return false;
            }

            @Override
            public @Nullable ItemStack getItemInUse() {
                return null;
            }

            @Override
            public int getItemInUseTicks() {
                return 0;
            }

            @Override
            public void setItemInUseTicks(int i) {

            }

            @Override
            public int getExpToLevel() {
                return 0;
            }

            @Override
            public @Nullable Entity releaseLeftShoulderEntity() {
                return null;
            }

            @Override
            public @Nullable Entity releaseRightShoulderEntity() {
                return null;
            }

            @Override
            public float getAttackCooldown() {
                return 0;
            }

            @Override
            public boolean discoverRecipe(@NotNull NamespacedKey recipe) {
                return false;
            }

            @Override
            public int discoverRecipes(@NotNull Collection<NamespacedKey> recipes) {
                return 0;
            }

            @Override
            public boolean undiscoverRecipe(@NotNull NamespacedKey recipe) {
                return false;
            }

            @Override
            public int undiscoverRecipes(@NotNull Collection<NamespacedKey> recipes) {
                return 0;
            }

            @Override
            public boolean hasDiscoveredRecipe(@NotNull NamespacedKey recipe) {
                return false;
            }

            @Override
            public @NotNull Set<NamespacedKey> getDiscoveredRecipes() {
                return new HashSet<>();
            }

            @Override
            public @Nullable Entity getShoulderEntityLeft() {
                return null;
            }

            @Override
            public void setShoulderEntityLeft(@Nullable Entity entity) {

            }

            @Override
            public @Nullable Entity getShoulderEntityRight() {
                return null;
            }

            @Override
            public void setShoulderEntityRight(@Nullable Entity entity) {

            }

            @Override
            public boolean dropItem(boolean dropAll) {
                return false;
            }

            @Override
            public float getExhaustion() {
                return 0;
            }

            @Override
            public void setExhaustion(float value) {

            }

            @Override
            public float getSaturation() {
                return 0;
            }

            @Override
            public void setSaturation(float value) {

            }

            @Override
            public int getFoodLevel() {
                return 0;
            }

            @Override
            public void setFoodLevel(int value) {

            }

            @Override
            public int getSaturatedRegenRate() {
                return 0;
            }

            @Override
            public void setSaturatedRegenRate(int ticks) {

            }

            @Override
            public int getUnsaturatedRegenRate() {
                return 0;
            }

            @Override
            public void setUnsaturatedRegenRate(int ticks) {

            }

            @Override
            public int getStarvationRate() {
                return 0;
            }

            @Override
            public void setStarvationRate(int ticks) {

            }

            @Override
            public @Nullable Location getLastDeathLocation() {
                return null;
            }

            @Override
            public void setLastDeathLocation(@Nullable Location location) {

            }
            
            @Override
            public @Nullable Firework fireworkBoost(@NotNull ItemStack fireworkItemStack) {
                return null;
            }
            
            @Override
            public double getEyeHeight() {
                return 0;
            }

            @Override
            public double getEyeHeight(boolean ignorePose) {
                return 0;
            }

            @Override
            public @NotNull Location getEyeLocation() {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 1.62, 0);
            }

            @Override
            public @NotNull List<Block> getLineOfSight(@Nullable Set<Material> transparent, int maxDistance) {
                return new ArrayList<>();
            }

            @Override
            public @NotNull Block getTargetBlock(@Nullable Set<Material> transparent, int maxDistance) {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0).getBlock();
            }
            
            @Override
            public @Nullable Block getTargetBlock(int maxDistance, TargetBlockInfo.@NotNull FluidMode fluidMode) {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0).getBlock();
            }

            @Override
            public @Nullable BlockFace getTargetBlockFace(int maxDistance, TargetBlockInfo.@NotNull FluidMode fluidMode) {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0).getBlock().getFace(new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0).getBlock());
            }
            
            @Override
            public @Nullable BlockFace getTargetBlockFace(int maxDistance, @NotNull FluidCollisionMode fluidMode) {
                return null;
            }
            
            @Override
            public @Nullable TargetBlockInfo getTargetBlockInfo(int maxDistance, TargetBlockInfo.@NotNull FluidMode fluidMode) {
                return new TargetBlockInfo(new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0).getBlock(), new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0).getBlock().getFace(new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0).getBlock()));
            }

            @Override
            public @Nullable Entity getTargetEntity(int maxDistance, boolean ignoreBlocks) {
                return null;
            }

            @Override
            public @Nullable TargetEntityInfo getTargetEntityInfo(int maxDistance, boolean ignoreBlocks) {
                return null;
            }
            
            @Override
            public @Nullable RayTraceResult rayTraceEntities(int maxDistance, boolean ignoreBlocks) {
                return null;
            }
            
            @Override
            public @NotNull List<Block> getLastTwoTargetBlocks(@Nullable Set<Material> transparent, int maxDistance) {
                return new ArrayList<>();
            }

            @Override
            public @Nullable Block getTargetBlockExact(int maxDistance) {
                return null;
            }

            @Override
            public @Nullable Block getTargetBlockExact(int maxDistance, @NotNull FluidCollisionMode fluidCollisionMode) {
                return null;
            }

            @Override
            public @Nullable RayTraceResult rayTraceBlocks(double maxDistance) {
                return null;
            }

            @Override
            public @Nullable RayTraceResult rayTraceBlocks(double maxDistance, @NotNull FluidCollisionMode fluidCollisionMode) {
                return null;
            }

            @Override
            public int getRemainingAir() {
                return 0;
            }

            @Override
            public void setRemainingAir(int ticks) {

            }

            @Override
            public int getMaximumAir() {
                return 0;
            }

            @Override
            public void setMaximumAir(int ticks) {

            }

            @Override
            public int getArrowCooldown() {
                return 0;
            }

            @Override
            public void setArrowCooldown(int ticks) {

            }

            @Override
            public int getArrowsInBody() {
                return 0;
            }

            @Override
            public void setArrowsInBody(int count) {

            }
            
            @Override
            public void setArrowsInBody(int count, boolean fireEvent) {
            
            }

            @Override
            public void setNextArrowRemoval(@Range(from = 0L, to = 2147483647L) int i) {

            }

            @Override
            public int getNextArrowRemoval() {
                return 0;
            }

            @Override
            public int getBeeStingerCooldown() {
                return 0;
            }

            @Override
            public void setBeeStingerCooldown(int ticks) {

            }

            @Override
            public int getBeeStingersInBody() {
                return 0;
            }

            @Override
            public void setBeeStingersInBody(int count) {

            }

            @Override
            public void setNextBeeStingerRemoval(@Range(from = 0L, to = 2147483647L) int i) {

            }

            @Override
            public int getNextBeeStingerRemoval() {
                return 0;
            }

            @Override
            public int getMaximumNoDamageTicks() {
                return 0;
            }

            @Override
            public void setMaximumNoDamageTicks(int ticks) {

            }

            @Override
            public double getLastDamage() {
                return 0;
            }

            @Override
            public void setLastDamage(double damage) {

            }

            @Override
            public int getNoDamageTicks() {
                return 0;
            }

            @Override
            public void setNoDamageTicks(int ticks) {

            }

            @Override
            public int getNoActionTicks() {
                return 0;
            }

            @Override
            public void setNoActionTicks(int i) {

            }

            @Override
            public @Nullable Player getKiller() {
                return null;
            }

            @Override
            public void setKiller(@Nullable Player killer) {

            }

            @Override
            public boolean addPotionEffect(@NotNull PotionEffect effect) {
                return false;
            }

            @Override
            public boolean addPotionEffect(@NotNull PotionEffect effect, boolean force) {
                return false;
            }

            @Override
            public boolean addPotionEffects(@NotNull Collection<PotionEffect> effects) {
                return false;
            }

            @Override
            public boolean hasPotionEffect(@NotNull PotionEffectType type) {
                return false;
            }

            @Override
            public @Nullable PotionEffect getPotionEffect(@NotNull PotionEffectType type) {
                return null;
            }

            @Override
            public void removePotionEffect(@NotNull PotionEffectType type) {

            }

            @Override
            public @NotNull Collection<PotionEffect> getActivePotionEffects() {
                return new ArrayList<>();
            }

            @Override
            public boolean clearActivePotionEffects() {
                return false;
            }

            @Override
            public boolean hasLineOfSight(@NotNull Entity other) {
                return false;
            }

            @Override
            public boolean hasLineOfSight(@NotNull Location location) {
                return false;
            }

            @Override
            public boolean getRemoveWhenFarAway() {
                return false;
            }

            @Override
            public void setRemoveWhenFarAway(boolean remove) {

            }

            @Override
            public void setCanPickupItems(boolean pickup) {

            }

            @Override
            public boolean getCanPickupItems() {
                return false;
            }

            @Override
            public boolean isLeashed() {
                return false;
            }

            @Override
            public @NotNull Entity getLeashHolder() throws IllegalStateException {
                return this;
            }

            @Override
            public boolean setLeashHolder(@Nullable Entity holder) {
                return false;
            }

            @Override
            public boolean isGliding() {
                return false;
            }

            @Override
            public void setGliding(boolean gliding) {

            }

            @Override
            public boolean isSwimming() {
                return false;
            }

            @Override
            public void setSwimming(boolean swimming) {

            }

            @Override
            public boolean isRiptiding() {
                return false;
            }

            @Override
            public boolean isSleeping() {
                return false;
            }

            @Override
            public boolean isClimbing() {
                return false;
            }

            @Override
            public void setAI(boolean ai) {

            }

            @Override
            public boolean hasAI() {
                return false;
            }

            @Override
            public void attack(@NotNull Entity target) {

            }

            @Override
            public void swingMainHand() {

            }

            @Override
            public void swingOffHand() {

            }

            @Override
            public void playHurtAnimation(float v) {

            }

            @Override
            public void setCollidable(boolean collidable) {

            }

            @Override
            public boolean isCollidable() {
                return false;
            }

            @Override
            public @NotNull Set<UUID> getCollidableExemptions() {
                return new HashSet<>();
            }

            @Override
            public <T> @Nullable T getMemory(@NotNull MemoryKey<T> memoryKey) {
                return null;
            }

            @Override
            public <T> void setMemory(@NotNull MemoryKey<T> memoryKey, @Nullable T memoryValue) {

            }
            
            @Override
            public @Nullable Sound getHurtSound() {
                return null;
            }
            
            @Override
            public @Nullable Sound getDeathSound() {
                return null;
            }
            
            @Override
            public @NotNull Sound getFallDamageSound(int fallHeight) {
                return Sound.ENTITY_PLAYER_SMALL_FALL;
            }
            
            @Override
            public @NotNull Sound getFallDamageSoundSmall() {
                return Sound.ENTITY_PLAYER_SMALL_FALL;
            }
            
            @Override
            public @NotNull Sound getFallDamageSoundBig() {
                return Sound.ENTITY_PLAYER_BIG_FALL;
            }
            
            @Override
            public @NotNull Sound getDrinkingSound(@NotNull ItemStack itemStack) {
                return Sound.ENTITY_GENERIC_DRINK;
            }
            
            @Override
            public @NotNull Sound getEatingSound(@NotNull ItemStack itemStack) {
                return Sound.ENTITY_GENERIC_EAT;
            }
            
            @Override
            public boolean canBreatheUnderwater() {
                return false;
            }
            
            @Override
            public @NotNull EntityCategory getCategory() {
                return EntityCategory.NONE;
            }

            @Override
            public void setInvisible(boolean invisible) {

            }

            @Override
            public boolean isInvisible() {
                return false;
            }

            @Override
            public void setNoPhysics(boolean b) {

            }

            @Override
            public boolean hasNoPhysics() {
                return false;
            }

            @Override
            public int getArrowsStuck() {
                return 0;
            }

            @Override
            public void setArrowsStuck(int arrows) {

            }

            @Override
            public int getShieldBlockingDelay() {
                return 0;
            }

            @Override
            public void setShieldBlockingDelay(int delay) {

            }

            @Override
            public float getSidewaysMovement() {
                return 0;
            }

            @Override
            public float getUpwardsMovement() {
                return 0;
            }

            @Override
            public float getForwardsMovement() {
                return 0;
            }

            @Override
            public void startUsingItem(@NotNull EquipmentSlot equipmentSlot) {

            }

            @Override
            public void completeUsingActiveItem() {

            }

            @Override
            public @NotNull ItemStack getActiveItem() {
                return new ItemStack(Material.AIR);
            }

            @Override
            public void clearActiveItem() {

            }

            @Override
            public int getActiveItemRemainingTime() {
                return 0;
            }

            @Override
            public void setActiveItemRemainingTime(@Range(from = 0L, to = 2147483647L) int i) {

            }

            @Override
            public boolean hasActiveItem() {
                return false;
            }

            @Override
            public int getActiveItemUsedTime() {
                return 0;
            }

            @Override
            public @NotNull EquipmentSlot getActiveItemHand() {
                return null;
            }

            @Override
            public int getItemUseRemainingTime() {
                return 0;
            }

            @Override
            public int getHandRaisedTime() {
                return 0;
            }

            @Override
            public @NotNull EquipmentSlot getHandRaised() {
                return EquipmentSlot.HAND;
            }

            @Override
            public boolean isJumping() {
                return false;
            }

            @Override
            public void setJumping(boolean jumping) {

            }

            @Override
            public void playPickupItemAnimation(@NotNull Item item, int quantity) {

            }

            @Override
            public float getHurtDirection() {
                return 0;
            }

            @Override
            public void setHurtDirection(float hurtDirection) {

            }
            
            @Override
            public void knockback(double strength, double directionX, double directionZ) {
            
            }
            
            @Override
            public void broadcastSlotBreak(@NotNull EquipmentSlot slot) {
            
            }
            
            @Override
            public void broadcastSlotBreak(@NotNull EquipmentSlot slot, @NotNull Collection<Player> players) {
            
            }
            
            @Override
            public @NotNull ItemStack damageItemStack(@NotNull ItemStack stack, int amount) {
                return stack;
            }
            
            @Override
            public void damageItemStack(@NotNull EquipmentSlot slot, int amount) {
            
            }
            
            @Override
            public float getBodyYaw() {
                return 0;
            }
            
            @Override
            public void setBodyYaw(float bodyYaw) {
            
            }

            @Override
            public boolean canUseEquipmentSlot(@NotNull EquipmentSlot equipmentSlot) {
                return true;
            }

            @Override
            public @Nullable AttributeInstance getAttribute(@NotNull Attribute attribute) {
                return null;
            }

            @Override
            public void registerAttribute(@NotNull Attribute attribute) {

            }

            @Override
            public void damage(double amount) {

            }

            @Override
            public void damage(double amount, @Nullable Entity source) {

            }

            @Override
            public void damage(double v, @NotNull DamageSource damageSource) {

            }

            @Override
            public double getHealth() {
                return 0;
            }

            @Override
            public void setHealth(double health) {

            }

            @Override
            public void heal(double v, @NotNull EntityRegainHealthEvent.RegainReason regainReason) {

            }

            @Override
            public double getAbsorptionAmount() {
                return 0;
            }

            @Override
            public void setAbsorptionAmount(double amount) {

            }

            @Override
            public double getMaxHealth() {
                return 0;
            }

            @Override
            public void setMaxHealth(double health) {

            }

            @Override
            public void resetMaxHealth() {

            }

            @Override
            public @NotNull Location getLocation() {
                return new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0);
            }

            @Override
            public @Nullable Location getLocation(@Nullable Location loc) {
                return loc;
            }

            @Override
            public void setVelocity(@NotNull Vector velocity) {

            }

            @Override
            public @NotNull Vector getVelocity() {
                return new Vector(0, 0, 0);
            }

            @Override
            public double getHeight() {
                return 0;
            }

            @Override
            public double getWidth() {
                return 0;
            }

            @Override
            public @NotNull BoundingBox getBoundingBox() {
                return BoundingBox.of(new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0), new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0));
            }

            @Override
            public boolean isInWater() {
                return false;
            }

            @Override
            public @NotNull World getWorld() {
                return Bukkit.getWorlds().getFirst();
            }

            @Override
            public boolean teleport(@NotNull Location location) {
                return false;
            }

            @Override
            public boolean teleport(@NotNull Location location, PlayerTeleportEvent.@NotNull TeleportCause cause) {
                return false;
            }

            @Override
            public boolean teleport(@NotNull Entity destination) {
                return false;
            }

            @Override
            public boolean teleport(@NotNull Entity destination, PlayerTeleportEvent.@NotNull TeleportCause cause) {
                return false;
            }

            @Override
            public @NotNull CompletableFuture<Boolean> teleportAsync(@NotNull Location location, @NotNull PlayerTeleportEvent.TeleportCause teleportCause, @NotNull TeleportFlag @NotNull ... teleportFlags) {
                return null;
            }

            @Override
            public @NotNull List<Entity> getNearbyEntities(double x, double y, double z) {
                return new ArrayList<>();
            }

            @Override
            public int getEntityId() {
                return 0;
            }

            @Override
            public int getFireTicks() {
                return 0;
            }

            @Override
            public int getMaxFireTicks() {
                return 0;
            }

            @Override
            public void setFireTicks(int ticks) {

            }

            @Override
            public void setVisualFire(boolean fire) {

            }

            @Override
            public boolean isVisualFire() {
                return false;
            }

            @Override
            public int getFreezeTicks() {
                return 0;
            }

            @Override
            public int getMaxFreezeTicks() {
                return 0;
            }

            @Override
            public void setFreezeTicks(int ticks) {

            }

            @Override
            public boolean isFrozen() {
                return false;
            }

            @Override
            public boolean isFreezeTickingLocked() {
                return false;
            }

            @Override
            public void lockFreezeTicks(boolean locked) {

            }

            @Override
            public void remove() {

            }

            @Override
            public boolean isDead() {
                return false;
            }

            @Override
            public boolean isValid() {
                return false;
            }

            @Override
            public @NotNull Server getServer() {
                return Bukkit.getServer();
            }

            @Override
            public boolean isPersistent() {
                return false;
            }

            @Override
            public void setPersistent(boolean persistent) {

            }

            @Override
            public @Nullable Entity getPassenger() {
                return null;
            }

            @Override
            public boolean setPassenger(@NotNull Entity passenger) {
                return false;
            }

            @Override
            public @NotNull List<Entity> getPassengers() {
                return new ArrayList<>();
            }

            @Override
            public boolean addPassenger(@NotNull Entity passenger) {
                return false;
            }

            @Override
            public boolean removePassenger(@NotNull Entity passenger) {
                return false;
            }

            @Override
            public boolean isEmpty() {
                return false;
            }

            @Override
            public boolean eject() {
                return false;
            }

            @Override
            public float getFallDistance() {
                return 0;
            }

            @Override
            public void setFallDistance(float distance) {

            }

            @Override
            public void setLastDamageCause(@Nullable EntityDamageEvent event) {

            }

            @Override
            public @Nullable EntityDamageEvent getLastDamageCause() {
                return null;
            }

            @Override
            public @NotNull UUID getUniqueId() {
                return Bukkit.getOfflinePlayer(name).getUniqueId();
            }

            @Override
            public int getTicksLived() {
                return 0;
            }

            @Override
            public void setTicksLived(int value) {

            }

            @Override
            public void playEffect(@NotNull EntityEffect type) {

            }

            @Override
            public @NotNull EntityType getType() {
                return EntityType.PLAYER;
            }
            
            @Override
            public @NotNull Sound getSwimSound() {
                return Sound.ENTITY_GENERIC_SWIM;
            }
            
            @Override
            public @NotNull Sound getSwimSplashSound() {
                return Sound.ENTITY_GENERIC_SPLASH;
            }
            
            @Override
            public @NotNull Sound getSwimHighSpeedSplashSound() {
                return Sound.ENTITY_GENERIC_SPLASH;
            }
            
            @Override
            public boolean isInsideVehicle() {
                return false;
            }

            @Override
            public boolean leaveVehicle() {
                return false;
            }

            @Override
            public @Nullable Entity getVehicle() {
                return null;
            }

            @Override
            public void setCustomNameVisible(boolean flag) {

            }

            @Override
            public boolean isCustomNameVisible() {
                return false;
            }
            
            @Override
            public void setVisibleByDefault(boolean visible) {
            
            }
            
            @Override
            public boolean isVisibleByDefault() {
                return false;
            }

            @Override
            public @NotNull Set<Player> getTrackedBy() {
                return null;
            }

            @Override
            public void setGlowing(boolean flag) {

            }

            @Override
            public boolean isGlowing() {
                return false;
            }

            @Override
            public void setInvulnerable(boolean flag) {

            }

            @Override
            public boolean isInvulnerable() {
                return false;
            }

            @Override
            public boolean isSilent() {
                return false;
            }

            @Override
            public void setSilent(boolean flag) {

            }

            @Override
            public boolean hasGravity() {
                return false;
            }

            @Override
            public void setGravity(boolean gravity) {

            }

            @Override
            public int getPortalCooldown() {
                return 0;
            }

            @Override
            public void setPortalCooldown(int cooldown) {

            }

            @Override
            public @NotNull Set<String> getScoreboardTags() {
                return new HashSet<>();
            }

            @Override
            public boolean addScoreboardTag(@NotNull String tag) {
                return false;
            }

            @Override
            public boolean removeScoreboardTag(@NotNull String tag) {
                return false;
            }

            @Override
            public @NotNull PistonMoveReaction getPistonMoveReaction() {
                return PistonMoveReaction.MOVE;
            }

            @Override
            public @NotNull BlockFace getFacing() {
                return BlockFace.SELF;
            }

            @Override
            public @NotNull Pose getPose() {
                return Pose.STANDING;
            }

            @Override
            public @NotNull SpawnCategory getSpawnCategory() {
                return SpawnCategory.AMBIENT;
            }

            @Override
            public boolean isInWorld() {
                return false;
            }

            @Override
            public @Nullable String getAsString() {
                return null;
            }

            @Override
            public @Nullable EntitySnapshot createSnapshot() {
                return null;
            }

            @Override
            public @NotNull Entity copy() {
                return null;
            }

            @Override
            public @NotNull Entity copy(@NotNull Location location) {
                return null;
            }

            @Override
            public @NotNull Component teamDisplayName() {
                return Component.text(name);
            }

            @Override
            public @Nullable Location getOrigin() {
                return null;
            }

            @Override
            public boolean fromMobSpawner() {
                return false;
            }

            @Override
            public CreatureSpawnEvent.@NotNull SpawnReason getEntitySpawnReason() {
                return CreatureSpawnEvent.SpawnReason.COMMAND;
            }
            
            @Override
            public boolean isUnderWater() {
                return false;
            }
            
            @Override
            public boolean isInRain() {
                return false;
            }

            @Override
            public boolean isInBubbleColumn() {
                return false;
            }

            @Override
            public boolean isInWaterOrRain() {
                return false;
            }

            @Override
            public boolean isInWaterOrBubbleColumn() {
                return false;
            }

            @Override
            public boolean isInWaterOrRainOrBubbleColumn() {
                return false;
            }

            @Override
            public boolean isInLava() {
                return false;
            }

            @Override
            public boolean isTicking() {
                return false;
            }

            @Override
            public @NotNull Set<Player> getTrackedPlayers() {
                return new HashSet<>();
            }

            @Override
            public boolean spawnAt(@NotNull Location location, CreatureSpawnEvent.@NotNull SpawnReason reason) {
                return false;
            }

            @Override
            public boolean isInPowderedSnow() {
                return false;
            }

            @Override
            public double getX() {
                return 0;
            }

            @Override
            public double getY() {
                return 0;
            }

            @Override
            public double getZ() {
                return 0;
            }

            @Override
            public float getPitch() {
                return 0;
            }

            @Override
            public float getYaw() {
                return 0;
            }

            @Override
            public boolean collidesAt(@NotNull Location location) {
                return false;
            }
            
            @Override
            public boolean wouldCollideUsing(@NotNull BoundingBox boundingBox) {
                return false;
            }

            @Override
            public @NotNull EntityScheduler getScheduler() {
                return null;
            }

            @Override
            public @NotNull String getScoreboardEntryName() {
                return null;
            }

            @Override
            public @Nullable Component customName() {
                return null;
            }

            @Override
            public void customName(@Nullable Component customName) {

            }

            @Override
            public @Nullable String getCustomName() {
                return null;
            }

            @Override
            public void setCustomName(@Nullable String name) {

            }

            @Override
            public void sendMessage(@NotNull String message) {

            }

            @Override
            public void sendMessage(@NotNull String... messages) {

            }

            @Override
            public void sendMessage(@Nullable UUID sender, @NotNull String message) {

            }

            @Override
            public void sendMessage(@Nullable UUID sender, @NotNull String... messages) {

            }

            @Override
            public @NotNull Component name() {
                return Component.text(name);
            }

            @Override
            public void setMetadata(@NotNull String metadataKey, @NotNull MetadataValue newMetadataValue) {

            }

            @Override
            public @NotNull List<MetadataValue> getMetadata(@NotNull String metadataKey) {
                return new ArrayList<>();
            }

            @Override
            public boolean hasMetadata(@NotNull String metadataKey) {
                return false;
            }

            @Override
            public void removeMetadata(@NotNull String metadataKey, @NotNull Plugin owningPlugin) {

            }

            @Override
            public boolean isPermissionSet(@NotNull String name) {
                return true;
            }

            @Override
            public boolean isPermissionSet(@NotNull Permission perm) {
                return true;
            }

            @Override
            public boolean hasPermission(@NotNull String name) {
                return true;
            }

            @Override
            public boolean hasPermission(@NotNull Permission perm) {
                return true;
            }

            @Override
            public @NotNull PermissionAttachment addAttachment(@NotNull Plugin plugin, @NotNull String name, boolean value) {
                return new PermissionAttachment(plugin, new PermissibleBase(new ServerOperator() {
                    @Override
                    public boolean isOp() {
                        return true;
                    }

                    @Override
                    public void setOp(boolean value) {

                    }
                }));
            }

            @Override
            public @NotNull PermissionAttachment addAttachment(@NotNull Plugin plugin) {
                return new PermissionAttachment(plugin, new PermissibleBase(new ServerOperator() {
                    @Override
                    public boolean isOp() {
                        return true;
                    }

                    @Override
                    public void setOp(boolean value) {

                    }
                }));
            }

            @Override
            public @Nullable PermissionAttachment addAttachment(@NotNull Plugin plugin, @NotNull String name, boolean value, int ticks) {
                return null;
            }

            @Override
            public @Nullable PermissionAttachment addAttachment(@NotNull Plugin plugin, int ticks) {
                return null;
            }

            @Override
            public void removeAttachment(@NotNull PermissionAttachment attachment) {

            }

            @Override
            public void recalculatePermissions() {

            }

            @Override
            public @NotNull Set<PermissionAttachmentInfo> getEffectivePermissions() {
                return new HashSet<>();
            }

            @Override
            public boolean isOp() {
                return true;
            }

            @Override
            public void setOp(boolean value) {

            }

            @Override
            public @NotNull PersistentDataContainer getPersistentDataContainer() {
                return new PersistentDataContainer() {
                    @Override
                    public <T, Z> void set(@NotNull NamespacedKey key, @NotNull PersistentDataType<T, Z> type, @NotNull Z value) {

                    }

                    @Override
                    public <T, Z> boolean has(@NotNull NamespacedKey key, @NotNull PersistentDataType<T, Z> type) {
                        return false;
                    }

                    @Override
                    public <T, Z> @Nullable Z get(@NotNull NamespacedKey key, @NotNull PersistentDataType<T, Z> type) {
                        return null;
                    }

                    @Override
                    public <T, Z> @NotNull Z getOrDefault(@NotNull NamespacedKey key, @NotNull PersistentDataType<T, Z> type, @NotNull Z defaultValue) {
                        return defaultValue;
                    }

                    @Override
                    public @NotNull Set<NamespacedKey> getKeys() {
                        return new HashSet<>();
                    }

                    @Override
                    public void remove(@NotNull NamespacedKey key) {

                    }

                    @Override
                    public boolean isEmpty() {
                        return false;
                    }

                    @Override
                    public void copyTo(@NonNull PersistentDataContainer persistentDataContainer, boolean b) {

                    }

                    @Override
                    public @NotNull PersistentDataAdapterContext getAdapterContext() {
                        throw new UnsupportedOperationException("난 포기할란다");
                    }

                    @Override
                    public boolean has(@NotNull NamespacedKey key) {
                        return false;
                    }
                    
                    @Override
                    public byte @NotNull [] serializeToBytes() {
                        return new byte[0];
                    }
                    
                    @Override
                    public void readFromBytes(byte @NotNull [] bytes, boolean clear) {
                    
                    }
                };
            }

            @Override
            public void sendPluginMessage(@NotNull Plugin source, @NotNull String channel, byte[] message) {

            }

            @Override
            public @NotNull Set<String> getListeningPluginChannels() {
                return new HashSet<>();
            }

            @Override
            public <T extends Projectile> @NotNull T launchProjectile(@NotNull Class<? extends T> projectile) {
                return (T) Bukkit.getWorlds().getFirst().spawn(new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0), Arrow.class);
            }

            @Override
            public <T extends Projectile> @NotNull T launchProjectile(@NotNull Class<? extends T> projectile, @Nullable Vector velocity) {
                return (T) Bukkit.getWorlds().getFirst().spawn(new Location(Bukkit.getWorlds().getFirst(), 0, 0, 0), Arrow.class);
            }

            @Override
            public <T extends Projectile> @NotNull T launchProjectile(@NotNull Class<? extends T> aClass, @Nullable Vector vector, java.util.function.@Nullable Consumer<? super T> consumer) {
                return null;
            }
        };
    }
}
