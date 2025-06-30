(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    339: (e, s, t) => {
        "use strict";
        t.r(s),
            t.d(s, {
                default: () => T
            });
        var a = t(5155)
            , l = t(2115)
            , r = t(8103)
            , n = t(2486)
            , i = t(5159)
            , c = t(3550)
            , m = t(5525)
            , d = t(9099)
            , x = t(646)
            , o = t(3052)
            , h = t(5731)
            , u = t(3741)
            , g = t(7703)
            , b = t(3915)
            , p = t(5695)
            , j = t(4416)
            , N = t(5339);
        let f = e => {
                let {open: s, confirmationText: t, confirmationError: l, onChange: r, onConfirm: n, onCancel: i} = e;
                return s ? (0,
                    a.jsx)("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                    children: (0,
                        a.jsxs)(g.A, {
                        className: "max-w-md w-full",
                        children: [(0,
                            a.jsxs)("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [(0,
                                a.jsx)("h3", {
                                className: "text-lg font-bold text-gray-900",
                                children: "중요한 안내사항"
                            }), (0,
                                a.jsx)("button", {
                                onClick: i,
                                className: "text-gray-400 hover:text-gray-600",
                                children: (0,
                                    a.jsx)(j.A, {
                                    className: "w-5 h-5"
                                })
                            })]
                        }), (0,
                            a.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "flex items-start space-x-3",
                                children: [(0,
                                    a.jsx)(N.A, {
                                    className: "w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0"
                                }), (0,
                                    a.jsxs)("div", {
                                    children: [(0,
                                        a.jsx)("p", {
                                        className: "text-gray-900 font-medium mb-2",
                                        children: "Organization 선택 관련 안내"
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-sm text-gray-600 leading-relaxed",
                                        children: "다음 GitHub 로그인에서 선택한 Organization들에 대한 커밋만 수집되며, 이후 Organization을 추가로 선택하려면 관리자의 조치가 필요합니다."
                                    })]
                                })]
                            }), (0,
                                a.jsx)("div", {
                                className: "bg-yellow-50 p-3 rounded-lg border border-yellow-200",
                                children: (0,
                                    a.jsx)("p", {
                                    className: "text-sm text-yellow-800",
                                    children: "신중하게 선택해주세요. 나중에 변경하기 어렵습니다."
                                })
                            }), (0,
                                a.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0,
                                    a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "위 내용을 확인했다면 아래에 입력해주세요"
                                }), (0,
                                    a.jsx)("input", {
                                    type: "text",
                                    value: t,
                                    onChange: e => r(e.target.value),
                                    placeholder: "확인했습니다",
                                    className: "toss-input",
                                    autoFocus: !0
                                }), l && (0,
                                    a.jsx)("p", {
                                    className: "text-sm text-red-600",
                                    children: l
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0,
                                    a.jsx)(u.A, {
                                    onClick: n,
                                    variant: "primary",
                                    className: "flex-1",
                                    disabled: !t.trim(),
                                    children: "확인하고 계속하기"
                                }), (0,
                                    a.jsx)(u.A, {
                                    onClick: i,
                                    variant: "secondary",
                                    className: "flex-1",
                                    children: "취소"
                                })]
                            })]
                        })]
                    })
                }) : null
            }
            , v = e => {
                let {step: s} = e;
                return (0,
                    a.jsxs)("div", {
                    className: "flex items-center justify-center space-x-4",
                    children: [(0,
                        a.jsxs)("div", {
                        className: "flex items-center space-x-2 ".concat("xquare" === s ? "text-blue-600" : "text-green-600"),
                        children: ["xquare" === s ? (0,
                            a.jsx)("div", {
                            className: "w-6 h-6 border-2 border-blue-600 rounded-full flex items-center justify-center",
                            children: (0,
                                a.jsx)("div", {
                                className: "w-2 h-2 bg-blue-600 rounded-full"
                            })
                        }) : (0,
                            a.jsx)(x.A, {
                            className: "w-6 h-6"
                        }), (0,
                            a.jsx)("span", {
                            className: "text-sm font-medium",
                            children: "XQUARE 로그인"
                        })]
                    }), (0,
                        a.jsx)(o.A, {
                        className: "w-4 h-4 text-gray-400"
                    }), (0,
                        a.jsxs)("div", {
                        className: "flex items-center space-x-2 ".concat("github" === s ? "text-blue-600" : "text-gray-400"),
                        children: ["github" === s ? (0,
                            a.jsx)("div", {
                            className: "w-6 h-6 border-2 border-blue-600 rounded-full flex items-center justify-center",
                            children: (0,
                                a.jsx)("div", {
                                className: "w-2 h-2 bg-blue-600 rounded-full"
                            })
                        }) : (0,
                            a.jsx)("div", {
                            className: "w-6 h-6 border-2 border-gray-300 rounded-full"
                        }), (0,
                            a.jsx)("span", {
                            className: "text-sm font-medium",
                            children: "GitHub 연동"
                        })]
                    })]
                })
            }
            , y = e => {
                let {error: s} = e;
                return (0,
                    a.jsx)(g.A, {
                    className: "bg-red-50 border-red-200 p-4",
                    children: (0,
                        a.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [(0,
                            a.jsx)(N.A, {
                            className: "w-5 h-5 text-red-600"
                        }), (0,
                            a.jsx)("span", {
                            className: "text-sm text-red-700",
                            children: s
                        })]
                    })
                })
            }
            , w = () => {
                let[e,s] = (0,
                    l.useState)("xquare")
                    , [t,r] = (0,
                    l.useState)({
                    accountId: "",
                    password: ""
                })
                    , [n,j] = (0,
                    l.useState)({
                    accountId: "",
                    password: ""
                })
                    , [N,w] = (0,
                    l.useState)(!1)
                    , [A,I] = (0,
                    l.useState)("")
                    , [C,k] = (0,
                    l.useState)("")
                    , {isLoading: M, error: S, xquareId: D, isAuthenticated: E, loginWithXquare: L, clearError: U} = (0,
                    i.useAuthStore)()
                    , F = (0,
                    p.useRouter)();
                (0,
                    l.useEffect)( () => {
                        E && F.push("/")
                    }
                    , [E, F]),
                    (0,
                        l.useEffect)( () => {
                            D && "xquare" === e && !E && s("github")
                        }
                        , [D, e, E]);
                let R = (0,
                    l.useCallback)( () => {
                        let e = {
                            accountId: "",
                            password: ""
                        }
                            , s = !0;
                        return t.accountId.trim() || (e.accountId = "계정 ID를 입력해주세요.",
                            s = !1),
                            t.password.trim() ? t.password.length < 6 && (e.password = "비밀번호는 6자 이상이어야 합니다.",
                                s = !1) : (e.password = "비밀번호를 입력해주세요.",
                                s = !1),
                            j(e),
                            s
                    }
                    , [t])
                    , P = (0,
                    l.useCallback)(async e => {
                        e.preventDefault(),
                            U(),
                        R() && await L(t)
                    }
                    , [U, R, L, t])
                    , H = (0,
                    l.useCallback)( () => {
                        U(),
                            w(!0),
                            I(""),
                            k("")
                    }
                    , [U])
                    , z = (0,
                    l.useCallback)( () => {
                        if ("확인했습니다" !== A.trim())
                            return void k('"확인했습니다"를 정확히 입력해주세요.');
                        w(!1),
                            (0,
                                h.hB)()
                    }
                    , [A])
                    , G = (0,
                    l.useCallback)( () => {
                        w(!1),
                            I(""),
                            k("")
                    }
                    , [])
                    , O = (0,
                    l.useCallback)(e => s => {
                        r(t => ({
                            ...t,
                            [e]: s.target.value
                        })),
                        n[e] && j(s => ({
                            ...s,
                            [e]: ""
                        }))
                    }
                    , [n]);
                return (0,
                    a.jsxs)(a.Fragment, {
                    children: [(0,
                        a.jsx)("div", {
                        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center p-3 sm:p-4 lg:p-6",
                        children: (0,
                            a.jsxs)("div", {
                            className: "max-w-sm sm:max-w-md w-full space-y-6 sm:space-y-8",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "text-center space-y-3 sm:space-y-4",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto",
                                    children: (0,
                                        a.jsx)(c.A, {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                    })
                                }), (0,
                                    a.jsxs)("div", {
                                    children: [(0,
                                        a.jsx)("h1", {
                                        className: "text-2xl sm:text-3xl font-black text-gray-900",
                                        children: "대마코인"
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base",
                                        children: "GitHub 커밋으로 코인을 채굴하세요"
                                    })]
                                })]
                            }), (0,
                                a.jsx)(v, {
                                step: e
                            }), S && (0,
                                a.jsx)(y, {
                                error: S
                            }), (0,
                                a.jsxs)(g.A, {
                                className: "space-y-4 sm:space-y-6",
                                children: ["xquare" === e && (0,
                                    a.jsxs)(a.Fragment, {
                                    children: [(0,
                                        a.jsxs)("div", {
                                        className: "text-center space-y-2",
                                        children: [(0,
                                            a.jsx)(m.A, {
                                            className: "w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto"
                                        }), (0,
                                            a.jsx)("h2", {
                                            className: "text-lg sm:text-xl font-bold text-gray-900",
                                            children: "XQUARE 로그인"
                                        }), (0,
                                            a.jsx)("p", {
                                            className: "text-xs sm:text-sm text-gray-600 px-2",
                                            children: "XQUARE 계정으로 안전하게 로그인하세요"
                                        })]
                                    }), (0,
                                        a.jsxs)("form", {
                                        onSubmit: P,
                                        className: "space-y-3 sm:space-y-4",
                                        children: [(0,
                                            a.jsx)(b.A, {
                                            label: "계정 ID",
                                            type: "text",
                                            value: t.accountId,
                                            onChange: O("accountId"),
                                            error: n.accountId,
                                            placeholder: "XQUARE 계정 ID를 입력하세요"
                                        }), (0,
                                            a.jsx)(b.A, {
                                            label: "비밀번호",
                                            type: "password",
                                            value: t.password,
                                            onChange: O("password"),
                                            error: n.password,
                                            placeholder: "비밀번호를 입력하세요"
                                        }), (0,
                                            a.jsxs)(u.A, {
                                            type: "submit",
                                            isLoading: M,
                                            className: "w-full mt-4 sm:mt-6",
                                            size: "lg",
                                            children: [(0,
                                                a.jsx)(m.A, {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 mr-2"
                                            }), "XQUARE로 로그인"]
                                        })]
                                    })]
                                }), "github" === e && (0,
                                    a.jsxs)(a.Fragment, {
                                    children: [(0,
                                        a.jsxs)("div", {
                                        className: "text-center space-y-2",
                                        children: [(0,
                                            a.jsx)(d.A, {
                                            className: "w-10 h-10 sm:w-12 sm:h-12 text-gray-900 mx-auto"
                                        }), (0,
                                            a.jsx)("h2", {
                                            className: "text-lg sm:text-xl font-bold text-gray-900",
                                            children: "GitHub 연동"
                                        }), (0,
                                            a.jsx)("p", {
                                            className: "text-xs sm:text-sm text-gray-600 px-2",
                                            children: "GitHub 계정을 연동하여 커밋 기반 채굴을 시작하세요"
                                        })]
                                    }), D && (0,
                                        a.jsx)("div", {
                                        className: "bg-green-50 p-3 sm:p-4 rounded-xl border border-green-200",
                                        children: (0,
                                            a.jsxs)("div", {
                                            className: "flex items-center space-x-2 sm:space-x-3",
                                            children: [(0,
                                                a.jsx)(x.A, {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0"
                                            }), (0,
                                                a.jsxs)("div", {
                                                className: "min-w-0",
                                                children: [(0,
                                                    a.jsx)("p", {
                                                    className: "text-xs sm:text-sm font-medium text-green-800",
                                                    children: "XQUARE 로그인 완료"
                                                }), (0,
                                                    a.jsxs)("p", {
                                                    className: "text-xs text-green-600 truncate",
                                                    children: ["ID: ", D]
                                                })]
                                            })]
                                        })
                                    }), (0,
                                        a.jsxs)("div", {
                                        className: "space-y-3 sm:space-y-4",
                                        children: [(0,
                                            a.jsx)("div", {
                                            className: "bg-blue-50 p-3 sm:p-4 rounded-xl border border-blue-200",
                                            children: (0,
                                                a.jsxs)("div", {
                                                className: "space-y-2 sm:space-y-3",
                                                children: [(0,
                                                    a.jsxs)("div", {
                                                    className: "flex items-start space-x-2 sm:space-x-3",
                                                    children: [(0,
                                                        a.jsx)(d.A, {
                                                        className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0"
                                                    }), (0,
                                                        a.jsx)("div", {
                                                        children: (0,
                                                            a.jsx)("h3", {
                                                            className: "text-sm sm:text-base font-semibold text-blue-900",
                                                            children: "GitHub 연동이 필요한 이유"
                                                        })
                                                    })]
                                                }), (0,
                                                    a.jsxs)("ul", {
                                                    className: "space-y-1 sm:space-y-2 text-xs sm:text-sm text-blue-800 ml-6 sm:ml-8",
                                                    children: [(0,
                                                        a.jsx)("li", {
                                                        children: "• 커밋 기반 자동 코인 채굴"
                                                    }), (0,
                                                        a.jsx)("li", {
                                                        children: "• 실시간 개발 활동 추적"
                                                    }), (0,
                                                        a.jsx)("li", {
                                                        children: "• 공정한 채굴량 계산"
                                                    })]
                                                })]
                                            })
                                        }), (0,
                                            a.jsxs)(u.A, {
                                            onClick: H,
                                            isLoading: M,
                                            className: "w-full",
                                            size: "lg",
                                            children: [(0,
                                                a.jsx)(d.A, {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 mr-2"
                                            }), "GitHub 계정 연동하기", (0,
                                                a.jsx)(o.A, {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 ml-2"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "text-center space-y-2 sm:space-y-3",
                                children: [(0,
                                    a.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500",
                                    children: [(0,
                                        a.jsxs)("div", {
                                        className: "flex items-center space-x-1 sm:space-x-2",
                                        children: [(0,
                                            a.jsx)(m.A, {
                                            className: "w-3 h-3 sm:w-4 sm:h-4"
                                        }), (0,
                                            a.jsx)("span", {
                                            children: "안전한 인증"
                                        })]
                                    }), (0,
                                        a.jsxs)("div", {
                                        className: "flex items-center space-x-1 sm:space-x-2",
                                        children: [(0,
                                            a.jsx)(c.A, {
                                            className: "w-3 h-3 sm:w-4 sm:h-4"
                                        }), (0,
                                            a.jsx)("span", {
                                            children: "자동 채굴"
                                        })]
                                    })]
                                }), (0,
                                    a.jsx)("p", {
                                    className: "text-xs text-gray-400 px-4",
                                    children: "GitHub 계정 연동 시 개인정보는 안전하게 보호됩니다"
                                })]
                            })]
                        })
                    }), (0,
                        a.jsx)(f, {
                        open: N,
                        confirmationText: A,
                        confirmationError: C,
                        onChange: I,
                        onConfirm: z,
                        onCancel: G
                    })]
                })
            }
        ;
        var A = t(6785)
            , I = t(6497)
            , C = t(8186)
            , k = t(4008)
            , M = t(480);
        let S = (0,
                t(5453).v)( (e, s) => ({
                recentCommits: [],
                totalEarned: 0,
                isLoading: !1,
                error: null,
                addCommit: t => {
                    let {recentCommits: a, totalEarned: l} = s();
                    e({
                        recentCommits: [t, ...a].slice(0, 50),
                        totalEarned: l + t.coinsEarned
                    })
                }
                ,
                setLoading: s => {
                    e({
                        isLoading: s
                    })
                }
                ,
                setError: s => {
                    e({
                        error: s,
                        isLoading: !1
                    })
                }
                ,
                clearCommits: () => {
                    e({
                        recentCommits: [],
                        totalEarned: 0
                    })
                }
            }))
            , D = () => {
                var e;
                let {walletInfo: s, userProfile: t, history: n, fetchWalletHistory: m, loadMoreHistory: d, hasMoreHistory: x, isLoadingHistory: o} = (0,
                    i.useAuthStore)()
                    , {recentCommits: u, addCommit: g} = S()
                    , [b,p] = (0,
                    l.useState)(!1)
                    , [j,N] = (0,
                    l.useState)(0)
                    , [f,v] = (0,
                    l.useState)(!1)
                    , y = (0,
                    l.useRef)(null)
                    , w = (0,
                    l.useRef)(null)
                    , D = (0,
                    l.useCallback)(async () => {
                        v(!0);
                        try {
                            let e = await (0,
                                h.hm)();
                            e.success && N(e.data.totalAmount || 0)
                        } catch (e) {
                            console.error("오늘 채굴된 코인 조회 실패:", e)
                        } finally {
                            v(!1)
                        }
                    }
                    , []);
                l.useEffect( () => {
                        m(0, !0),
                            D()
                    }
                    , []),
                    l.useEffect( () => {
                            console.log("\uD83D\uDCCA MiningDashboard - userProfile 상태:", t),
                            t && (console.log("\uD83D\uDCCA MiningDashboard - totalCommits:", t.totalCommits),
                                console.log("\uD83D\uDCCA MiningDashboard - commits:", t.commits),
                                console.log("\uD83D\uDCCA MiningDashboard - commitCount:", t.commitCount),
                                console.log("\uD83D\uDCCA MiningDashboard - total_commits:", t.total_commits),
                                console.log("\uD83D\uDCCA MiningDashboard - 실제 표시될 커밋 수:", (null == t ? void 0 : t.totalCommits) || (null == t ? void 0 : t.commits) || (null == t ? void 0 : t.commitCount) || (null == t ? void 0 : t.total_commits) || 0))
                        }
                        , [t]),
                    l.useEffect( () => {
                            let e = new IntersectionObserver(e => {
                                    let[s] = e;
                                    s.isIntersecting && x && !o && d()
                                }
                                ,{
                                    threshold: .1,
                                    rootMargin: "50px",
                                    root: y.current
                                })
                                , s = w.current;
                            return s && e.observe(s),
                                () => {
                                    s && e.unobserve(s)
                                }
                        }
                        , [x, o, d]),
                    l.useEffect( () => {
                            let e = setInterval( () => {
                                    .3 > Math.random() && E()
                                }
                                , 1e4);
                            return () => clearInterval(e)
                        }
                        , []),
                    l.useEffect( () => {
                            let e = setInterval( () => {
                                    D()
                                }
                                , 3e4);
                            return () => clearInterval(e)
                        }
                        , [D]);
                let E = () => {
                        g({
                            id: "commit_".concat(Date.now()),
                            sha: "".concat(Math.random().toString(36).substr(2, 7)),
                            message: "채굴 시스템 구현 완료",
                            author: (null == t ? void 0 : t.githubId) || "developer",
                            date: new Date().toISOString(),
                            repository: "daemacoin-frontend",
                            coinsEarned: Math.floor(50 * Math.random()) + 10,
                            isMined: !0,
                            additions: Math.floor(100 * Math.random()) + 20,
                            deletions: Math.floor(50 * Math.random()) + 5,
                            changedFiles: Math.floor(10 * Math.random()) + 1
                        }),
                            p(!0),
                            setTimeout( () => p(!1), 1e3),
                            setTimeout( () => {
                                    D()
                                }
                                , 1500)
                    }
                ;
                return (0,
                    a.jsxs)("div", {
                    className: "space-y-6 sm:space-y-8",
                    children: [(0,
                        a.jsxs)("div", {
                        className: "text-center space-y-6 sm:space-y-8",
                        children: [(0,
                            a.jsxs)("div", {
                            className: "space-y-3 sm:space-y-4",
                            children: [(0,
                                a.jsxs)("h1", {
                                className: "text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight",
                                children: ["GitHub으로", (0,
                                    a.jsx)("br", {}), (0,
                                    a.jsx)("span", {
                                    className: "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent",
                                    children: "코인 채굴"
                                }), "하세요! \uD83D\uDE80"]
                            }), (0,
                                a.jsx)("p", {
                                className: "text-gray-600 text-base sm:text-lg lg:text-xl font-medium px-4",
                                children: "코드를 작성하고 커밋할 때마다 대마코인이 자동으로 채굴됩니다"
                            })]
                        }), (0,
                            a.jsx)("div", {
                            className: "flex justify-center",
                            children: (0,
                                a.jsxs)("div", {
                                className: "relative toss-float",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl sm:shadow-2xl mining-animation",
                                    children: (0,
                                        a.jsx)(r.A, {
                                        className: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white pickaxe-mining"
                                    })
                                }), (0,
                                    a.jsx)("div", {
                                    className: "absolute -top-2 -right-2 sm:-top-3 sm:-right-3",
                                    children: (0,
                                        a.jsx)("div", {
                                        className: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center toss-bounce-in shadow-md sm:shadow-lg",
                                        children: (0,
                                            a.jsx)("div", {
                                            className: "w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-white rounded-full animate-pulse"
                                        })
                                    })
                                }), (0,
                                    a.jsx)("div", {
                                    className: "absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-ping opacity-75"
                                }), (0,
                                    a.jsx)("div", {
                                    className: "absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full animate-ping opacity-75 animation-delay-500"
                                }), (0,
                                    a.jsx)("div", {
                                    className: "absolute top-1 -left-2 sm:top-2 sm:-left-4 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-ping opacity-50 animation-delay-300"
                                })]
                            })
                        }), (0,
                            a.jsx)("div", {
                            className: "bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-green-200 shadow-lg mx-2 sm:mx-0",
                            children: (0,
                                a.jsxs)("div", {
                                className: "text-center space-y-2 sm:space-y-3",
                                children: [(0,
                                    a.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-2 sm:space-x-3",
                                    children: [(0,
                                        a.jsx)("div", {
                                        className: "w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"
                                    }), (0,
                                        a.jsx)("span", {
                                        className: "text-base sm:text-lg font-bold text-green-700",
                                        children: "채굴 진행 중..."
                                    }), (0,
                                        a.jsx)("div", {
                                        className: "w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse animation-delay-300"
                                    })]
                                }), (0,
                                    a.jsx)("p", {
                                    className: "text-green-600 font-medium text-sm sm:text-base",
                                    children: "GitHub 커밋을 실시간으로 감지하고 있습니다 ⚡"
                                })]
                            })
                        }), (0,
                            a.jsx)("div", {
                            className: "mining-status-card bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-blue-200 shadow-lg mx-2 sm:mx-0",
                            children: (0,
                                a.jsxs)("div", {
                                className: "mining-status-container text-center space-y-3 sm:space-y-4",
                                children: [(0,
                                    a.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-2 sm:space-x-3",
                                    children: [(0,
                                        a.jsx)(A.A, {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                                    }), (0,
                                        a.jsx)("span", {
                                        className: "mining-status-title text-base sm:text-lg font-bold text-blue-700",
                                        children: "오늘의 채굴 현황"
                                    })]
                                }), (0,
                                    a.jsxs)("div", {
                                    className: "space-y-2 sm:space-y-3",
                                    children: [(0,
                                        a.jsx)("div", {
                                        className: "flex items-center justify-center space-x-2",
                                        children: f ? (0,
                                            a.jsx)("div", {
                                            className: "mining-loading-spinner"
                                        }) : (0,
                                            a.jsxs)(a.Fragment, {
                                            children: [(0,
                                                a.jsx)("span", {
                                                className: "mining-status-number text-xl sm:text-2xl font-black text-blue-900 ".concat(j >= 20 ? "mining-status-complete" : ""),
                                                children: j
                                            }), (0,
                                                a.jsx)("span", {
                                                className: "text-lg sm:text-xl font-bold text-blue-600",
                                                children: "/"
                                            }), (0,
                                                a.jsx)("span", {
                                                className: "text-lg sm:text-xl font-bold text-blue-600",
                                                children: "20"
                                            }), (0,
                                                a.jsx)(c.A, {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 ml-1"
                                            })]
                                        })
                                    }), (0,
                                        a.jsx)("div", {
                                        className: "mining-progress-container",
                                        children: (0,
                                            a.jsx)("div", {
                                            className: "mining-progress-bar w-full h-2 sm:h-3",
                                            children: (0,
                                                a.jsx)("div", {
                                                className: "mining-progress-fill",
                                                style: {
                                                    width: "".concat(Math.min(j / 20 * 100, 100), "%")
                                                }
                                            })
                                        })
                                    }), (0,
                                        a.jsx)("div", {
                                        className: "text-xs sm:text-sm font-medium",
                                        children: j >= 20 ? (0,
                                            a.jsx)("div", {
                                            className: "mining-complete-message inline-block",
                                            children: "✅ 오늘 채굴 완료! 내일 다시 도전하세요"
                                        }) : (0,
                                            a.jsxs)("div", {
                                            className: "mining-available-message inline-block",
                                            children: ["앞으로 ", (0,
                                                a.jsxs)("span", {
                                                className: "font-bold text-blue-800",
                                                children: [20 - j, "개"]
                                            }), " 더 채굴 가능"]
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0,
                        a.jsxs)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                        children: [(0,
                            a.jsxs)("div", {
                            className: "bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "flex items-center space-x-4 sm:space-x-6",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg",
                                    children: (0,
                                        a.jsx)(c.A, {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                    })
                                }), (0,
                                    a.jsxs)("div", {
                                    children: [(0,
                                        a.jsx)("p", {
                                        className: "text-xs sm:text-sm text-gray-600 font-semibold mb-1 sm:mb-2",
                                        children: "총 보유 코인"
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-xl sm:text-2xl lg:text-3xl font-black text-gray-900",
                                        children: (null == s || null == (e = s.balance) ? void 0 : e.toLocaleString()) || 0
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-sm sm:text-lg font-bold text-yellow-600",
                                        children: "DMC"
                                    })]
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "mt-4 sm:mt-6 flex items-center text-xs sm:text-sm text-gray-600",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 animate-pulse"
                                }), "실시간 업데이트 중"]
                            })]
                        }), (0,
                            a.jsxs)("div", {
                            className: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "flex items-center space-x-4 sm:space-x-6",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg",
                                    children: (0,
                                        a.jsx)(I.A, {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                    })
                                }), (0,
                                    a.jsxs)("div", {
                                    children: [(0,
                                        a.jsx)("p", {
                                        className: "text-xs sm:text-sm text-gray-600 font-semibold mb-1 sm:mb-2",
                                        children: "총 커밋 수"
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-xl sm:text-2xl lg:text-3xl font-black text-gray-900",
                                        children: (null == t ? void 0 : t.totalCommits) || (null == t ? void 0 : t.commits) || (null == t ? void 0 : t.commitCount) || (null == t ? void 0 : t.total_commits) || 0
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-sm sm:text-lg font-bold text-blue-600",
                                        children: "commits"
                                    })]
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "mt-4 sm:mt-6 flex items-center text-xs sm:text-sm text-gray-600",
                                children: [(0,
                                    a.jsx)(I.A, {
                                    className: "w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500"
                                }), "GitHub 연동 중"]
                            })]
                        })]
                    }), (0,
                        a.jsx)("div", {
                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100",
                        children: (0,
                            a.jsxs)("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0,
                                    a.jsxs)("h2", {
                                    className: "text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 flex items-center",
                                    children: [(0,
                                        a.jsx)("span", {
                                        className: "text-xl sm:text-2xl lg:text-3xl mr-2 sm:mr-3",
                                        children: "\uD83D\uDCDD"
                                    }), "코인 내역"]
                                }), (0,
                                    a.jsxs)("div", {
                                    className: "flex items-center space-x-1 sm:space-x-2 bg-yellow-50 px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl border border-yellow-200",
                                    children: [(0,
                                        a.jsx)(C.A, {
                                        className: "w-3 h-3 sm:w-5 sm:h-5 text-yellow-500"
                                    }), (0,
                                        a.jsx)("span", {
                                        className: "text-xs sm:text-sm text-yellow-700 font-semibold",
                                        children: "채굴된 코인"
                                    })]
                                })]
                            }), (0,
                                a.jsx)("div", {
                                className: "mining-history-scroll space-y-3 sm:space-y-4 max-h-60 sm:max-h-80 lg:max-h-96 overflow-y-auto pr-2 sm:pr-4",
                                ref: y,
                                children: (null == n ? void 0 : n.length) > 0 ? (0,
                                    a.jsxs)(a.Fragment, {
                                    children: [n.map( (e, s) => (0,
                                        a.jsx)("div", {
                                        className: "bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-100 hover:shadow-md transition-all duration-200",
                                        children: (0,
                                            a.jsxs)("div", {
                                            className: "flex items-start justify-between",
                                            children: [(0,
                                                a.jsxs)("div", {
                                                className: "flex-1 space-y-1 sm:space-y-2",
                                                children: [(0,
                                                    a.jsxs)("div", {
                                                    className: "flex items-center space-x-2 sm:space-x-3",
                                                    children: [(0,
                                                        a.jsx)("div", {
                                                        className: "w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center",
                                                        children: (0,
                                                            a.jsx)(I.A, {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-white"
                                                        })
                                                    }), (0,
                                                        a.jsxs)("div", {
                                                        children: [(0,
                                                            a.jsx)("p", {
                                                            className: "font-bold text-gray-900 text-sm sm:text-base",
                                                            children: e.message || "코인 채굴"
                                                        }), (0,
                                                            a.jsx)("p", {
                                                            className: "text-xs sm:text-sm text-gray-500",
                                                            children: (0,
                                                                k.GP)(new Date(e.createdAt), "MM월 dd일 HH:mm", {
                                                                locale: M.ko
                                                            })
                                                        })]
                                                    })]
                                                }), (0,
                                                    a.jsxs)("p", {
                                                    className: "text-xs sm:text-sm text-gray-600 pl-8 sm:pl-11",
                                                    children: ["저장소: ", e.repoName]
                                                })]
                                            }), (0,
                                                a.jsxs)("div", {
                                                className: "text-right ml-3 sm:ml-4",
                                                children: [(0,
                                                    a.jsxs)("p", {
                                                    className: "font-black text-green-600 text-sm sm:text-lg flex items-center",
                                                    children: [e.amount.toLocaleString(), (0,
                                                        a.jsx)(c.A, {
                                                        className: "w-3 h-3 sm:w-4 sm:h-4 ml-1 text-yellow-500"
                                                    })]
                                                }), (0,
                                                    a.jsx)("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: "DMC"
                                                })]
                                            })]
                                        })
                                    }, e.id || s)), (0,
                                        a.jsx)("div", {
                                        ref: w,
                                        className: "h-4"
                                    }), o && (0,
                                        a.jsx)("div", {
                                        className: "text-center py-3 sm:py-4",
                                        children: (0,
                                            a.jsxs)("div", {
                                            className: "inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm",
                                            children: [(0,
                                                a.jsx)("div", {
                                                className: "animate-spin rounded-full h-3 h-3 sm:h-4 sm:w-4 border-b-2 border-blue-600 mr-2"
                                            }), "더 많은 내역 불러오는 중..."]
                                        })
                                    }), !x && n.length > 0 && (0,
                                        a.jsx)("div", {
                                        className: "text-center py-3 sm:py-4",
                                        children: (0,
                                            a.jsx)("p", {
                                            className: "text-xs sm:text-sm text-gray-500",
                                            children: "모든 내역을 불러왔습니다 ✨"
                                        })
                                    })]
                                }) : (0,
                                    a.jsxs)("div", {
                                    className: "text-center py-8 sm:py-12",
                                    children: [(0,
                                        a.jsx)("div", {
                                        className: "w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4",
                                        children: (0,
                                            a.jsx)(I.A, {
                                            className: "w-6 h-6 sm:w-8 sm:h-8 text-gray-400"
                                        })
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-gray-500 text-sm sm:text-base",
                                        children: "아직 커밋 내역이 없습니다"
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-gray-400 text-xs sm:text-sm mt-1",
                                        children: "GitHub에 코드를 커밋해보세요!"
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        ;
        var E = t(7550)
            , L = t(7924)
            , U = t(1007)
            , F = t(5196);
        let R = () => {
                var e;
                let {walletInfo: s} = (0, i.useAuthStore)(), [t,r] = (0, l.useState)("select-recipient"), [c,m] = (0, l.useState)(""), [d,x] = (0, l.useState)([]), [b,p] = (0, l.useState)(null), [N,f] = (0, l.useState)(null), [v,y] = (0, l.useState)(""), [w,A] = (0,
                    l.useState)(!1)
                    , [I,C] = (0,
                    l.useState)("")
                    , [k,M] = (0,
                    l.useState)(null)
                    , [S,D] = (0,
                    l.useState)(!0)
                    , R = (0,
                    l.useRef)(null)
                    , P = (0,
                    l.useRef)(null)
                    , H = (0,
                    l.useCallback)(async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                        , s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    A(!0);
                    try {
                        let t = await (0,
                            h.lo)(e, 20);
                        t.success ? (s ? x(t.data.users) : x(e => [...e, ...t.data.users]),
                            p(t.data.pagination),
                            D(t.data.pagination.hasNext)) : C(t.error || "사용자 목록을 불러올 수 없습니다.")
                    } catch (e) {
                        C("네트워크 오류가 발생했습니다.")
                    } finally {
                        A(!1)
                    }
                }, []);
                (0,
                    l.useEffect)( () => {
                        let e = new IntersectionObserver(e => {
                                let[s] = e;
                                s.isIntersecting && S && !w && b && H(b.page + 1, !1)
                            }
                            ,{
                                threshold: .1,
                                rootMargin: "50px",
                                root: P.current
                            })
                            , s = R.current;
                        return s && e.observe(s),
                            () => {
                                s && e.unobserve(s)
                            }
                    }
                    , [S, w, b, H]),
                    (0,
                        l.useEffect)( () => {
                            H(0, !0)
                        }
                        , [H]);
                let z = d.filter(e => e.githubId.toLowerCase().includes(c.toLowerCase()))
                    , G = e => {
                        f(e),
                            r("enter-amount")
                    }
                    , O = e => {
                        "." === e && v.includes(".") || ("0" === v && "." !== e ? y(e) : y(s => s + e))
                    }
                    , _ = async () => {
                        if (!(!N || !v || 0 >= parseFloat(v))) {
                            A(!0),
                                C("");
                            try {
                                let e = await (0,
                                    h.tx)(N.id, parseFloat(v));
                                e.success ? (M(e.data),
                                    r("result")) : C(e.error || "송금에 실패했습니다.")
                            } catch (e) {
                                C("송금 중 오류가 발생했습니다.")
                            } finally {
                                A(!1)
                            }
                        }
                    }
                    , Q = () => {
                        r("select-recipient"),
                            f(null),
                            y(""),
                            C(""),
                            M(null)
                    }
                ;
                return (0,
                    a.jsxs)("div", {
                    className: "space-y-6",
                    children: [(0,
                        a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                            a.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: ["select-recipient" !== t && (0,
                                a.jsx)("button", {
                                onClick: () => {
                                    "enter-amount" === t ? r("select-recipient") : "confirm" === t ? r("enter-amount") : "result" === t && Q()
                                }
                                ,
                                className: "w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors",
                                children: (0,
                                    a.jsx)(E.A, {
                                    className: "w-5 h-5 text-gray-600"
                                })
                            }), (0,
                                a.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "송금"
                            })]
                        }), (0,
                            a.jsx)("div", {
                            className: "bg-blue-50 px-4 py-2 rounded-xl",
                            children: (0,
                                a.jsxs)("p", {
                                className: "text-sm text-blue-600 font-medium",
                                children: ["잔액: ", (null == s || null == (e = s.balance) ? void 0 : e.toLocaleString()) || 0, " DMC"]
                            })
                        })]
                    }), "select-recipient" === t && (0,
                        a.jsx)(g.A, {
                        className: "space-y-6",
                        children: (0,
                            a.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                                a.jsx)("h2", {
                                className: "text-lg font-semibold text-gray-900",
                                children: "누구에게 보낼까요?"
                            }), (0,
                                a.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                    a.jsx)(L.A, {
                                    className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                }), (0,
                                    a.jsx)("input", {
                                    type: "text",
                                    placeholder: "GitHub ID로 검색",
                                    value: c,
                                    onChange: e => m(e.target.value),
                                    className: "toss-input pl-12"
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                ref: P,
                                className: "space-y-2 max-h-96 overflow-y-auto",
                                children: [z.map(e => (0,
                                    a.jsxs)("div", {
                                    onClick: () => G(e),
                                    className: "flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200",
                                    children: [(0,
                                        a.jsxs)("div", {
                                        className: "relative",
                                        children: [e.githubImageUrl ? (0,
                                            a.jsx)("img", {
                                            src: e.githubImageUrl,
                                            alt: e.githubId,
                                            className: "w-12 h-12 rounded-full object-cover"
                                        }) : (0,
                                            a.jsx)("div", {
                                            className: "w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center",
                                            children: (0,
                                                a.jsx)(U.A, {
                                                className: "w-6 h-6 text-gray-400"
                                            })
                                        }), (0,
                                            a.jsx)("div", {
                                            className: "absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                                        })]
                                    }), (0,
                                        a.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0,
                                            a.jsx)("p", {
                                            className: "font-semibold text-gray-900",
                                            children: e.githubId
                                        }), (0,
                                            a.jsxs)("p", {
                                            className: "text-sm text-gray-500",
                                            children: ["총 ", e.totalCommits, "회 커밋 • 일일 ", e.dailyCoinAmount, " DMC"]
                                        })]
                                    }), (0,
                                        a.jsx)(o.A, {
                                        className: "w-5 h-5 text-gray-400"
                                    })]
                                }, e.id)), (0,
                                    a.jsx)("div", {
                                    ref: R,
                                    className: "h-4"
                                }), w && (0,
                                    a.jsx)("div", {
                                    className: "text-center py-4",
                                    children: (0,
                                        a.jsxs)("div", {
                                        className: "inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm",
                                        children: [(0,
                                            a.jsx)("div", {
                                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"
                                        }), "사용자 목록 불러오는 중..."]
                                    })
                                }), !S && z.length > 0 && (0,
                                    a.jsx)("div", {
                                    className: "text-center py-4",
                                    children: (0,
                                        a.jsx)("p", {
                                        className: "text-sm text-gray-500",
                                        children: "모든 사용자를 불러왔습니다"
                                    })
                                })]
                            }), 0 === z.length && !w && (0,
                                a.jsxs)("div", {
                                className: "text-center py-8",
                                children: [(0,
                                    a.jsx)(U.A, {
                                    className: "w-12 h-12 text-gray-300 mx-auto mb-3"
                                }), (0,
                                    a.jsx)("p", {
                                    className: "text-gray-500",
                                    children: c ? "검색 결과가 없습니다" : "사용자를 불러오는 중..."
                                })]
                            })]
                        })
                    }), "enter-amount" === t && N && (0,
                        a.jsx)(g.A, {
                        className: "space-y-6",
                        children: (0,
                            a.jsxs)("div", {
                            className: "text-center space-y-4",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "flex items-center justify-center space-x-3",
                                children: [N.githubImageUrl ? (0,
                                    a.jsx)("img", {
                                    src: N.githubImageUrl,
                                    alt: N.githubId,
                                    className: "w-16 h-16 rounded-full object-cover"
                                }) : (0,
                                    a.jsx)("div", {
                                    className: "w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center",
                                    children: (0,
                                        a.jsx)(U.A, {
                                        className: "w-8 h-8 text-gray-400"
                                    })
                                }), (0,
                                    a.jsxs)("div", {
                                    children: [(0,
                                        a.jsx)("p", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: N.githubId
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-sm text-gray-500",
                                        children: "에게 보내기"
                                    })]
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0,
                                    a.jsxs)("div", {
                                    className: "text-4xl font-black text-gray-900",
                                    children: [v || "0", " ", (0,
                                        a.jsx)("span", {
                                        className: "text-2xl text-blue-600",
                                        children: "DMC"
                                    })]
                                }), (0,
                                    a.jsxs)("div", {
                                    className: "flex justify-center space-x-2",
                                    children: [(0,
                                        a.jsx)("button", {
                                        onClick: () => {
                                            var e;
                                            y((null == s || null == (e = s.balance) ? void 0 : e.toString()) || "0")
                                        }
                                        ,
                                        className: "px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors",
                                        children: "전액"
                                    }), (0,
                                        a.jsx)("button", {
                                        onClick: () => y("100"),
                                        className: "px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors",
                                        children: "100"
                                    }), (0,
                                        a.jsx)("button", {
                                        onClick: () => y("1000"),
                                        className: "px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors",
                                        children: "1,000"
                                    })]
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "grid grid-cols-3 gap-4 max-w-xs mx-auto",
                                children: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].map(e => (0,
                                    a.jsx)("button", {
                                    onClick: () => O(e),
                                    className: "w-16 h-16 rounded-full bg-gray-50 hover:bg-gray-100 text-xl font-semibold text-gray-900 transition-colors active:scale-95",
                                    children: e
                                }, e)), (0,
                                    a.jsx)("button", {
                                    onClick: () => {
                                        v.length > 1 ? y(e => e.slice(0, -1)) : y("0")
                                    }
                                    ,
                                    className: "w-16 h-16 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors active:scale-95",
                                    children: (0,
                                        a.jsx)(j.A, {
                                        className: "w-6 h-6 text-gray-600"
                                    })
                                })]
                            }), (0,
                                a.jsxs)(u.A, {
                                onClick: () => r("confirm"),
                                disabled: !v || 0 >= parseFloat(v) || parseFloat(v) > ((null == s ? void 0 : s.balance) || 0),
                                className: "w-full",
                                size: "lg",
                                children: [(0,
                                    a.jsx)(n.A, {
                                    className: "w-5 h-5 mr-2"
                                }), "다음"]
                            }), parseFloat(v) > ((null == s ? void 0 : s.balance) || 0) && (0,
                                a.jsx)("p", {
                                className: "text-sm text-red-500",
                                children: "잔액이 부족합니다"
                            })]
                        })
                    }), "confirm" === t && N && (0,
                        a.jsx)(g.A, {
                        className: "space-y-6",
                        children: (0,
                            a.jsxs)("div", {
                            className: "text-center space-y-6",
                            children: [(0,
                                a.jsx)("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: "송금 내용을 확인해주세요"
                            }), (0,
                                a.jsxs)("div", {
                                className: "bg-gray-50 rounded-2xl p-6 space-y-4",
                                children: [(0,
                                    a.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-3",
                                    children: [N.githubImageUrl ? (0,
                                        a.jsx)("img", {
                                        src: N.githubImageUrl,
                                        alt: N.githubId,
                                        className: "w-16 h-16 rounded-full object-cover"
                                    }) : (0,
                                        a.jsx)("div", {
                                        className: "w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center",
                                        children: (0,
                                            a.jsx)(U.A, {
                                            className: "w-8 h-8 text-gray-400"
                                        })
                                    }), (0,
                                        a.jsxs)("div", {
                                        children: [(0,
                                            a.jsx)("p", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: N.githubId
                                        }), (0,
                                            a.jsx)("p", {
                                            className: "text-sm text-gray-500",
                                            children: "받을 사람"
                                        })]
                                    })]
                                }), (0,
                                    a.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0,
                                        a.jsxs)("p", {
                                        className: "text-3xl font-black text-blue-600",
                                        children: [parseFloat(v).toLocaleString(), " DMC"]
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "송금 금액"
                                    })]
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "text-sm text-gray-500 space-y-1",
                                children: [(0,
                                    a.jsxs)("p", {
                                    children: ["송금 후 잔액: ", (((null == s ? void 0 : s.balance) || 0) - parseFloat(v)).toLocaleString(), " DMC"]
                                }), (0,
                                    a.jsx)("p", {
                                    children: "송금 수수료: 0 DMC (무료)"
                                })]
                            }), I && (0,
                                a.jsx)("div", {
                                className: "bg-red-50 border border-red-200 rounded-xl p-4",
                                children: (0,
                                    a.jsx)("p", {
                                    className: "text-red-600 text-sm",
                                    children: I
                                })
                            }), (0,
                                a.jsxs)(u.A, {
                                onClick: _,
                                isLoading: w,
                                className: "w-full bg-blue-600 hover:bg-blue-700",
                                size: "lg",
                                children: [(0,
                                    a.jsx)(n.A, {
                                    className: "w-5 h-5 mr-2"
                                }), parseFloat(v).toLocaleString(), " DMC 송금하기"]
                            })]
                        })
                    }), "result" === t && N && k && (0,
                        a.jsx)(g.A, {
                        className: "space-y-6",
                        children: (0,
                            a.jsxs)("div", {
                            className: "text-center space-y-6",
                            children: [(0,
                                a.jsx)("div", {
                                className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto",
                                children: (0,
                                    a.jsx)(F.A, {
                                    className: "w-8 h-8 text-green-600"
                                })
                            }), (0,
                                a.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0,
                                    a.jsx)("h2", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "송금 완료"
                                }), (0,
                                    a.jsx)("p", {
                                    className: "text-gray-600",
                                    children: "송금이 성공적으로 완료되었습니다"
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "bg-gray-50 rounded-2xl p-6 space-y-4",
                                children: [(0,
                                    a.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-3",
                                    children: [N.githubImageUrl ? (0,
                                        a.jsx)("img", {
                                        src: N.githubImageUrl,
                                        alt: N.githubId,
                                        className: "w-12 h-12 rounded-full object-cover"
                                    }) : (0,
                                        a.jsx)("div", {
                                        className: "w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center",
                                        children: (0,
                                            a.jsx)(U.A, {
                                            className: "w-6 h-6 text-gray-400"
                                        })
                                    }), (0,
                                        a.jsxs)("div", {
                                        children: [(0,
                                            a.jsx)("p", {
                                            className: "font-semibold text-gray-900",
                                            children: N.githubId
                                        }), (0,
                                            a.jsx)("p", {
                                            className: "text-sm text-gray-500",
                                            children: "에게 송금됨"
                                        })]
                                    })]
                                }), (0,
                                    a.jsx)("div", {
                                    className: "text-center",
                                    children: (0,
                                        a.jsxs)("p", {
                                        className: "text-2xl font-black text-blue-600",
                                        children: [parseFloat(v).toLocaleString(), " DMC"]
                                    })
                                })]
                            }), (0,
                                a.jsx)(u.A, {
                                onClick: Q,
                                className: "w-full",
                                size: "lg",
                                children: "새로운 송금하기"
                            })]
                        })
                    })]
                })
            }
        ;
        var P = t(6766)
            , H = t(7939)
            , z = t(381)
            , G = t(4835)
            , O = t(1788)
            , _ = t(6862);
        let Q = () => {
                var e;
                let {user: s, logout: t, isAuthenticated: r, walletInfo: n, userProfile: m} = (0,
                        i.useAuthStore)()
                    , [d,x] = (0,
                        l.useState)(!1)
                    , [o,h] = (0,
                        l.useState)("")
                    , b = async () => {
                        if (!(null == m ? void 0 : m.githubId))
                            return void alert("GitHub ID 정보를 불러올 수 없습니다.");
                        try {
                            let e = await _.toDataURL(m.githubId, {
                                width: 300,
                                margin: 2,
                                color: {
                                    dark: "#000000",
                                    light: "#FFFFFF"
                                }
                            });
                            h(e),
                                x(!0)
                        } catch (e) {
                            console.error("QR 코드 생성 실패:", e),
                                alert("QR 코드 생성에 실패했습니다.")
                        }
                    }
                    , p = () => {
                        x(!1),
                            h("")
                    }
                ;
                return (0,
                    a.jsxs)(a.Fragment, {
                    children: [(0,
                        a.jsx)("header", {
                        className: "bg-white border-b border-gray-200 sticky top-0 z-50",
                        children: (0,
                            a.jsx)("div", {
                            className: "max-w-6xl mx-auto px-3 sm:px-4 lg:px-8",
                            children: (0,
                                a.jsxs)("div", {
                                className: "flex justify-between items-center h-14 sm:h-16",
                                children: [(0,
                                    a.jsxs)("div", {
                                    className: "flex items-center space-x-2",
                                    children: [(0,
                                        a.jsx)("div", {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center",
                                        children: (0,
                                            a.jsx)(c.A, {
                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-white"
                                        })
                                    }), (0,
                                        a.jsx)("span", {
                                        className: "text-lg sm:text-xl font-black text-gray-900",
                                        children: "대마코인"
                                    })]
                                }), r && s ? (0,
                                    a.jsxs)("div", {
                                    className: "flex items-center space-x-2 sm:space-x-4",
                                    children: [(0,
                                        a.jsxs)("div", {
                                        className: "flex items-center space-x-1 sm:space-x-2 bg-gray-50 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl",
                                        children: [(0,
                                            a.jsx)(c.A, {
                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-yellow-500"
                                        }), (0,
                                            a.jsx)("span", {
                                            className: "font-semibold text-gray-900 text-xs sm:text-sm",
                                            children: (null == n || null == (e = n.balance) ? void 0 : e.toLocaleString()) || 0
                                        }), (0,
                                            a.jsx)("span", {
                                            className: "hidden sm:inline text-xs font-medium text-gray-600",
                                            children: "DMC"
                                        }), (0,
                                            a.jsx)(u.A, {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: b,
                                            className: "p-0.5 sm:p-1 ml-1 sm:ml-2 hover:bg-gray-100",
                                            title: "지갑 QR 코드 보기",
                                            children: (0,
                                                a.jsx)(H.A, {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
                                            })
                                        })]
                                    }), (0,
                                        a.jsxs)("div", {
                                        className: "flex items-center space-x-2 sm:space-x-3",
                                        children: [(0,
                                            a.jsx)("div", {
                                            className: "w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden",
                                            children: (0,
                                                a.jsx)(P.default, {
                                                src: (null == m ? void 0 : m.githubImageUrl) || s.avatar || "/default-avatar.svg",
                                                alt: (null == m ? void 0 : m.githubId) || s.name,
                                                width: 32,
                                                height: 32,
                                                className: "w-full h-full object-cover"
                                            })
                                        }), (0,
                                            a.jsxs)("div", {
                                            className: "hidden md:block",
                                            children: [(0,
                                                a.jsx)("p", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: (null == m ? void 0 : m.githubId) || s.name
                                            }), (0,
                                                a.jsxs)("p", {
                                                className: "text-xs text-gray-500",
                                                children: ["@", (null == m ? void 0 : m.githubId) || s.githubUsername]
                                            })]
                                        })]
                                    }), (0,
                                        a.jsxs)("div", {
                                        className: "flex items-center space-x-1 sm:space-x-2",
                                        children: [(0,
                                            a.jsx)(u.A, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "p-1.5 sm:p-2",
                                            children: (0,
                                                a.jsx)(z.A, {
                                                className: "w-3 h-3 sm:w-4 sm:h-4"
                                            })
                                        }), (0,
                                            a.jsx)(u.A, {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: () => {
                                                t()
                                            }
                                            ,
                                            className: "p-1.5 sm:p-2",
                                            children: (0,
                                                a.jsx)(G.A, {
                                                className: "w-3 h-3 sm:w-4 sm:h-4"
                                            })
                                        })]
                                    })]
                                }) : (0,
                                    a.jsx)("div", {
                                    className: "flex items-center space-x-4",
                                    children: (0,
                                        a.jsx)("span", {
                                        className: "text-sm text-gray-600",
                                        children: "로그인해주세요"
                                    })
                                })]
                            })
                        })
                    }), d && (0,
                        a.jsx)("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50",
                        children: (0,
                            a.jsxs)(g.A, {
                            className: "max-w-sm w-full max-h-[90vh] overflow-y-auto",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "flex items-center justify-between mb-4 sm:mb-6",
                                children: [(0,
                                    a.jsx)("h3", {
                                    className: "text-base sm:text-lg font-bold text-gray-900",
                                    children: "내 지갑 QR 코드"
                                }), (0,
                                    a.jsx)("button", {
                                    onClick: p,
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: (0,
                                        a.jsx)(j.A, {
                                        className: "w-4 h-4 sm:w-5 sm:h-5"
                                    })
                                })]
                            }), (0,
                                a.jsxs)("div", {
                                className: "text-center space-y-3 sm:space-y-4",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-100",
                                    children: o && (0,
                                        a.jsx)("img", {
                                        src: o,
                                        alt: "지갑 QR 코드",
                                        className: "w-full max-w-[250px] sm:max-w-[300px] mx-auto"
                                    })
                                }), (0,
                                    a.jsxs)("div", {
                                    className: "space-y-2",
                                    children: [(0,
                                        a.jsx)("p", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: "GitHub ID"
                                    }), (0,
                                        a.jsx)("p", {
                                        className: "text-sm sm:text-lg font-mono bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded border break-all",
                                        children: null == m ? void 0 : m.githubId
                                    })]
                                }), (0,
                                    a.jsx)("div", {
                                    className: "bg-blue-50 p-2.5 sm:p-3 rounded-lg border border-blue-200",
                                    children: (0,
                                        a.jsx)("p", {
                                        className: "text-xs sm:text-sm text-blue-700",
                                        children: "이 QR 코드를 스캔하면 결제 시 내 계정으로 결제됩니다."
                                    })
                                }), (0,
                                    a.jsxs)("div", {
                                    className: "flex gap-2 sm:gap-3",
                                    children: [(0,
                                        a.jsxs)(u.A, {
                                        onClick: () => {
                                            if (!o)
                                                return;
                                            let e = document.createElement("a");
                                            e.download = "".concat(null == m ? void 0 : m.githubId, "_wallet_qr.png"),
                                                e.href = o,
                                                e.click()
                                        }
                                        ,
                                        variant: "secondary",
                                        className: "flex-1 text-sm py-2.5",
                                        children: [(0,
                                            a.jsx)(O.A, {
                                            className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                                        }), "다운로드"]
                                    }), (0,
                                        a.jsx)(u.A, {
                                        onClick: p,
                                        variant: "primary",
                                        className: "flex-1 text-sm py-2.5",
                                        children: "닫기"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        ;
        function q() {
            let {isAuthenticated: e, startWalletPolling: s, stopWalletPolling: t, walletPollingInterval: a} = (0,
                i.useAuthStore)();
            return (0,
                l.useEffect)( () => {
                    e && !a && (console.log("지갑 폴링 자동 시작"),
                        s()),
                    !e && a && (console.log("지갑 폴링 자동 중지"),
                        t())
                }
                , [e, a, s, t]),
                (0,
                    l.useEffect)( () => {
                        let e = () => {
                                a && t()
                            }
                        ;
                        return window.addEventListener("beforeunload", e),
                            () => {
                                window.removeEventListener("beforeunload", e),
                                a && t()
                            }
                    }
                    , [a, t]),
                null
        }
        function X(e) {
            let {limit: s=10} = e
                , [t,r] = (0,
                l.useState)([])
                , [n,c] = (0,
                l.useState)(!0)
                , [m,d] = (0,
                l.useState)(!1)
                , [x,o] = (0,
                l.useState)(null)
                , [u,g] = (0,
                l.useState)(0)
                , [b,p] = (0,
                l.useState)(!0)
                , {user: j} = (0,
                i.useAuthStore)();
            (0,
                l.useRef)(null);
            let N = (0,
                l.useRef)(null)
                , f = (0,
                l.useRef)({
                currentPage: 0,
                hasMore: !0,
                isLoadingMore: !1,
                isLoading: !0
            });
            (0,
                l.useEffect)( () => {
                    f.current = {
                        currentPage: u,
                        hasMore: b,
                        isLoadingMore: m,
                        isLoading: n
                    }
                }
                , [u, b, m, n]),
                (0,
                    l.useEffect)( () => {
                        v(0, !0)
                    }
                    , [s]);
            let v = (0,
                l.useCallback)(async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (console.log("\uD83D\uDE80 fetchLeaderboard 시작:", {
                    page: e,
                    reset: t,
                    limit: s
                }),
                !t && (f.current.isLoadingMore || !f.current.hasMore))
                    return void console.log("❌ 중복 호출 방지:", {
                        isLoadingMore: f.current.isLoadingMore,
                        hasMore: f.current.hasMore
                    });
                t ? (c(!0),
                    o(null),
                    f.current.isLoading = !0) : (d(!0),
                    f.current.isLoadingMore = !0);
                try {
                    let a = await (0,
                        h.Ee)(e, s);
                    if (console.log("\uD83D\uDCE1 API 응답:", a),
                    a.success && a.data) {
                        let e = a.data
                            , s = e.items || [];
                        console.log("✅ API 성공:", {
                            currentPage: e.currentPage,
                            hasNext: e.hasNext,
                            itemsCount: s.length,
                            totalPages: e.totalPages,
                            totalUsers: e.totalUsers
                        }),
                            t ? r(s) : r(e => [...e, ...s]),
                            g(e.currentPage),
                            p(e.hasNext),
                            f.current.currentPage = e.currentPage,
                            f.current.hasMore = e.hasNext,
                            console.log("\uD83D\uDD04 상태 업데이트:", {
                                currentPage: e.currentPage,
                                hasMore: e.hasNext
                            })
                    } else
                        console.warn("리더보드 API 실패, 데모 데이터 사용:", a.error),
                        t && (r(y()),
                            p(!1),
                            f.current.hasMore = !1),
                            o(a.error || "데이터를 불러올 수 없습니다.")
                } catch (e) {
                    console.warn("리더보드 API 오류, 데모 데이터 사용:", e),
                    t && (r(y()),
                        p(!1),
                        f.current.hasMore = !1),
                        o("네트워크 오류가 발생했습니다.")
                } finally {
                    c(!1),
                        d(!1),
                        f.current.isLoading = !1,
                        f.current.isLoadingMore = !1
                }
            }, [s]);
            (0,
                l.useEffect)( () => {
                    console.log("\uD83D\uDD2D Observer 설정");
                    let e = new IntersectionObserver(e => {
                            let[s] = e;
                            console.log("\uD83D\uDC41️ Observer 트리거:", {
                                isIntersecting: s.isIntersecting,
                                intersectionRatio: s.intersectionRatio
                            }),
                            s.isIntersecting && (console.log("✨ 무한스크롤 조건 체크 중..."),
                                console.log("\uD83D\uDCCA 현재 상태:", {
                                    hasMore: f.current.hasMore,
                                    isLoadingMore: f.current.isLoadingMore,
                                    currentPage: f.current.currentPage
                                }),
                                f.current.hasMore && !f.current.isLoadingMore ? (console.log("\uD83D\uDE80 무한스크롤 실행!"),
                                    v(f.current.currentPage + 1, !1)) : console.log("❌ 무한스크롤 조건 불충족"))
                        }
                        ,{
                            threshold: .1,
                            rootMargin: "50px",
                            root: null
                        })
                        , s = N.current;
                    return s ? (console.log("\uD83C\uDFAF Observer target 관찰 시작"),
                        e.observe(s)) : console.warn("⚠️ Observer target이 없습니다!"),
                        () => {
                            s && (console.log("\uD83D\uDD34 Observer 정리"),
                                e.unobserve(s))
                        }
                }
                , [v]);
            let y = () => {
                let e = [{
                    rank: 1,
                    githubId: "coding-master",
                    profileImageUrl: "https://avatars.githubusercontent.com/u/1?v=4",
                    totalCoins: 15420
                }, {
                    rank: 2,
                    githubId: "commit-hero",
                    profileImageUrl: "https://avatars.githubusercontent.com/u/2?v=4",
                    totalCoins: 12800
                }, {
                    rank: 3,
                    githubId: "code-ninja",
                    profileImageUrl: "https://avatars.githubusercontent.com/u/3?v=4",
                    totalCoins: 9650
                }, {
                    rank: 4,
                    githubId: "dev-master",
                    profileImageUrl: "https://avatars.githubusercontent.com/u/4?v=4",
                    totalCoins: 8340
                }, {
                    rank: 5,
                    githubId: "algorithm-god",
                    profileImageUrl: "https://avatars.githubusercontent.com/u/5?v=4",
                    totalCoins: 7820
                }, {
                    rank: 6,
                    githubId: "frontend-wizard",
                    profileImageUrl: "https://avatars.githubusercontent.com/u/6?v=4",
                    totalCoins: 6950
                }, {
                    rank: 7,
                    githubId: "backend-guru",
                    profileImageUrl: "https://avatars.githubusercontent.com/u/7?v=4",
                    totalCoins: 5780
                }];
                return (null == j ? void 0 : j.githubId) && e.push({
                    rank: 8,
                    githubId: j.githubId || j.githubUsername || "user",
                    profileImageUrl: j.avatar || "https://avatars.githubusercontent.com/u/0?v=4",
                    totalCoins: j.totalCoins || 1e3
                }),
                    e
            }
                , w = e => {
                switch (e) {
                    case 1:
                        return "\uD83E\uDD47";
                    case 2:
                        return "\uD83E\uDD48";
                    case 3:
                        return "\uD83E\uDD49";
                    default:
                        return "".concat(e)
                }
            }
                , A = e => e >= 1e6 ? "".concat((e / 1e6).toFixed(1), "M") : e >= 1e3 ? "".concat((e / 1e3).toFixed(1), "K") : e.toLocaleString();
            return (0,
                a.jsx)("div", {
                className: "bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 border border-gray-100 h-fit",
                children: (0,
                    a.jsxs)("div", {
                    className: "space-y-4 sm:space-y-6",
                    children: [(0,
                        a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                            a.jsxs)("h2", {
                            className: "text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 flex items-center",
                            children: [(0,
                                a.jsx)("span", {
                                className: "text-xl sm:text-2xl lg:text-3xl mr-2 sm:mr-3",
                                children: "\uD83C\uDFC6"
                            }), "리더보드"]
                        }), (0,
                            a.jsxs)("div", {
                            className: "flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-yellow-50 to-orange-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-yellow-200",
                            children: [(0,
                                a.jsx)("div", {
                                className: "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"
                            }), (0,
                                a.jsxs)("span", {
                                className: "text-xs sm:text-sm text-yellow-700 font-semibold",
                                children: ["페이지 ", u, " ", b ? "(더 있음)" : "(마지막)"]
                            })]
                        })]
                    }), n ? (0,
                        a.jsx)("div", {
                        className: "space-y-3 sm:space-y-4",
                        children: [void 0, void 0, void 0, void 0, void 0].map( (e, s) => (0,
                            a.jsx)("div", {
                            className: "animate-pulse",
                            children: (0,
                                a.jsxs)("div", {
                                className: "bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"
                                }), (0,
                                    a.jsx)("div", {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full"
                                }), (0,
                                    a.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0,
                                        a.jsx)("div", {
                                        className: "h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-1 sm:mb-2"
                                    }), (0,
                                        a.jsx)("div", {
                                        className: "h-2 sm:h-3 bg-gray-200 rounded w-1/2"
                                    })]
                                })]
                            })
                        }, s))
                    }) : (0,
                        a.jsxs)("div", {
                        className: "leaderboard-scroll space-y-2 sm:space-y-3 max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-auto pr-1 sm:pr-2",
                        onScroll: e => {
                            e.stopPropagation()
                        }
                        ,
                        children: [t.map(e => (0,
                            a.jsx)("div", {
                            className: "bg-gradient-to-r hover:shadow-md transition-all duration-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 border ".concat((null == j ? void 0 : j.githubId) === e.githubId || (null == j ? void 0 : j.githubUsername) === e.githubId ? "from-blue-50 to-indigo-50 border-blue-200 ring-2 ring-blue-100" : "from-gray-50 to-gray-100 border-gray-200 hover:from-blue-50 hover:to-indigo-50"),
                            children: (0,
                                a.jsxs)("div", {
                                className: "flex items-center space-x-3 sm:space-x-4",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: e.rank <= 3 ? (0,
                                        a.jsx)("div", {
                                        className: "text-lg sm:text-xl lg:text-2xl",
                                        children: w(e.rank)
                                    }) : (0,
                                        a.jsx)("div", {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm",
                                        children: e.rank
                                    })
                                }), (0,
                                    a.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0,
                                        a.jsx)("img", {
                                        src: e.profileImageUrl,
                                        alt: "".concat(e.githubId, " 프로필"),
                                        className: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white shadow-sm",
                                        loading: "lazy"
                                    })
                                }), (0,
                                    a.jsx)("div", {
                                    className: "flex-1 min-w-0",
                                    children: (0,
                                        a.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                            a.jsx)("div", {
                                            className: "min-w-0 flex-1",
                                            children: (0,
                                                a.jsxs)("p", {
                                                className: "font-bold truncate text-sm sm:text-base ".concat((null == j ? void 0 : j.githubId) === e.githubId || (null == j ? void 0 : j.githubUsername) === e.githubId ? "text-blue-700" : "text-gray-900"),
                                                children: [e.githubId, ((null == j ? void 0 : j.githubId) === e.githubId || (null == j ? void 0 : j.githubUsername) === e.githubId) && (0,
                                                    a.jsx)("span", {
                                                    className: "ml-1 sm:ml-2 text-xs bg-blue-100 text-blue-600 px-1.5 sm:px-2 py-0.5 rounded-full",
                                                    children: "ME"
                                                })]
                                            })
                                        }), (0,
                                            a.jsxs)("div", {
                                            className: "text-right ml-2 sm:ml-3",
                                            children: [(0,
                                                a.jsxs)("div", {
                                                className: "flex items-center space-x-1",
                                                children: [(0,
                                                    a.jsx)("span", {
                                                    className: "text-yellow-500 text-sm sm:text-base",
                                                    children: "\uD83E\uDE99"
                                                }), (0,
                                                    a.jsx)("span", {
                                                    className: "font-black text-gray-900 text-sm sm:text-base",
                                                    children: A(e.totalCoins)
                                                })]
                                            }), (0,
                                                a.jsx)("p", {
                                                className: "text-xs text-gray-500",
                                                children: "DMC"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }, "".concat(e.rank, "-").concat(e.githubId))), (0,
                            a.jsx)("div", {
                            ref: N,
                            className: "h-2 sm:h-4"
                        }), m && (0,
                            a.jsx)("div", {
                            className: "text-center py-3 sm:py-4",
                            children: (0,
                                a.jsxs)("div", {
                                className: "inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm",
                                children: [(0,
                                    a.jsx)("div", {
                                    className: "animate-spin rounded-full h-3 h-3 sm:h-4 sm:w-4 border-b-2 border-blue-600 mr-2"
                                }), "더 많은 사용자 불러오는 중..."]
                            })
                        }), b && !m && t.length > 0 && (0,
                            a.jsx)("div", {
                            className: "text-center py-3 sm:py-4",
                            children: (0,
                                a.jsxs)("button", {
                                onClick: () => v(u + 1, !1),
                                className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors",
                                children: ["더 보기 (페이지 ", u + 1, ")"]
                            })
                        }), !b && t.length > 0 && (0,
                            a.jsx)("div", {
                            className: "text-center py-3 sm:py-4",
                            children: (0,
                                a.jsx)("p", {
                                className: "text-xs sm:text-sm text-gray-500",
                                children: "모든 사용자를 불러왔습니다 ✨"
                            })
                        })]
                    }), x && (0,
                        a.jsxs)("div", {
                        className: "text-center py-6 sm:py-8",
                        children: [(0,
                            a.jsxs)("div", {
                            className: "text-red-500 text-sm sm:text-base mb-2",
                            children: ["⚠️ ", x]
                        }), (0,
                            a.jsx)("button", {
                            onClick: () => {
                                o(null),
                                    v(0, !0)
                            }
                            ,
                            className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors",
                            children: "다시 시도"
                        })]
                    }), !n && !x && 0 === t.length && (0,
                        a.jsxs)("div", {
                        className: "text-center py-8 sm:py-12",
                        children: [(0,
                            a.jsx)("div", {
                            className: "text-4xl sm:text-5xl lg:text-6xl mb-4",
                            children: "\uD83C\uDFC6"
                        }), (0,
                            a.jsx)("p", {
                            className: "text-gray-500 text-sm sm:text-base mb-2",
                            children: "아직 참가자가 없습니다"
                        }), (0,
                            a.jsx)("p", {
                            className: "text-gray-400 text-xs sm:text-sm",
                            children: "첫 번째 채굴자가 되어보세요!"
                        })]
                    })]
                })
            })
        }
        function T() {
            let {isAuthenticated: e, user: s} = (0,
                i.useAuthStore)()
                , [t,c] = (0,
                l.useState)("mining");
            return (0,
                a.jsxs)(a.Fragment, {
                children: [(0,
                    a.jsx)(q, {}), e && s ? (0,
                    a.jsxs)("div", {
                    className: "min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50",
                    children: [(0,
                        a.jsx)(Q, {}), (0,
                        a.jsxs)("main", {
                        className: "max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",
                        children: [(0,
                            a.jsx)("div", {
                            className: "mb-6 sm:mb-8",
                            children: (0,
                                a.jsxs)("div", {
                                className: "bg-white rounded-2xl p-2 shadow-sm border border-gray-100 inline-flex",
                                children: [(0,
                                    a.jsxs)("button", {
                                    onClick: () => c("mining"),
                                    className: "flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 ".concat("mining" === t ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"),
                                    children: [(0,
                                        a.jsx)(r.A, {
                                        className: "w-4 h-4 sm:w-5 sm:h-5"
                                    }), (0,
                                        a.jsx)("span", {
                                        className: "text-sm sm:text-base",
                                        children: "채굴"
                                    })]
                                }), (0,
                                    a.jsxs)("button", {
                                    onClick: () => c("transfer"),
                                    className: "flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 ".concat("transfer" === t ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"),
                                    children: [(0,
                                        a.jsx)(n.A, {
                                        className: "w-4 h-4 sm:w-5 sm:h-5"
                                    }), (0,
                                        a.jsx)("span", {
                                        className: "text-sm sm:text-base",
                                        children: "송금"
                                    })]
                                })]
                            })
                        }), (0,
                            a.jsxs)("div", {
                            className: "flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",
                            children: [(0,
                                a.jsxs)("div", {
                                className: "order-2 lg:order-1 lg:col-span-2",
                                children: ["mining" === t && (0,
                                    a.jsx)(D, {}), "transfer" === t && (0,
                                    a.jsx)(R, {})]
                            }), (0,
                                a.jsx)("div", {
                                className: "order-1 lg:order-2 lg:col-span-1",
                                children: (0,
                                    a.jsx)("div", {
                                    className: "lg:sticky lg:top-4",
                                    children: (0,
                                        a.jsx)(X, {
                                        limit: 8
                                    })
                                })
                            })]
                        })]
                    })]
                }) : (0,
                    a.jsx)(w, {})]
            })
        }
    }
    ,
    3741: (e, s, t) => {
        "use strict";
        t.d(s, {
            A: () => r
        });
        var a = t(5155);
        t(2115);
        var l = t(2596);
        let r = e => {
            let {variant: s="primary", size: t="md", isLoading: r=!1, children: n, className: i, disabled: c, ...m} = e;
            return (0,
                a.jsx)("button", {
                className: (0,
                    l.$)("toss-button font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2", {
                    primary: "toss-button-primary text-white",
                    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
                    ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
                    danger: "bg-red-500 text-white hover:bg-red-600"
                }[s], {
                    sm: "px-4 py-2 text-sm rounded-lg",
                    md: "px-6 py-4 text-base rounded-xl",
                    lg: "px-8 py-5 text-lg rounded-2xl"
                }[t], i),
                disabled: c || r,
                ...m,
                children: r ? (0,
                    a.jsxs)(a.Fragment, {
                    children: [(0,
                        a.jsx)("div", {
                        className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                    }), "로딩중..."]
                }) : n
            })
        }
    }
    ,
    3915: (e, s, t) => {
        "use strict";
        t.d(s, {
            A: () => r
        });
        var a = t(5155);
        t(2115);
        var l = t(2596);
        let r = e => {
            let {label: s, error: t, helperText: r, leftIcon: n, rightIcon: i, className: c, ...m} = e
                , d = (0,
                l.$)("toss-input", n && "pl-12", i && "pr-12", t && "border-red-500 focus:border-red-500", c);
            return (0,
                a.jsxs)("div", {
                className: "space-y-2",
                children: [s && (0,
                    a.jsx)("label", {
                    className: "block text-sm font-medium text-gray-700",
                    children: s
                }), (0,
                    a.jsxs)("div", {
                    className: "relative",
                    children: [n && (0,
                        a.jsx)("div", {
                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                        children: n
                    }), (0,
                        a.jsx)("input", {
                        className: d,
                        ...m
                    }), i && (0,
                        a.jsx)("div", {
                        className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                        children: i
                    })]
                }), t && (0,
                    a.jsx)("p", {
                    className: "text-sm text-red-500",
                    children: t
                }), r && !t && (0,
                    a.jsx)("p", {
                    className: "text-sm text-gray-500",
                    children: r
                })]
            })
        }
    }
    ,
    4356: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 339))
    }
    ,
    7703: (e, s, t) => {
        "use strict";
        t.d(s, {
            A: () => r
        });
        var a = t(5155);
        t(2115);
        var l = t(2596);
        let r = e => {
            let {children: s, className: t, padding: r="md", hover: n=!1, onClick: i} = e
                , c = n || i ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "";
            return (0,
                a.jsx)("div", {
                className: (0,
                    l.$)("toss-card transition-all duration-200", {
                    sm: "p-4",
                    md: "p-6",
                    lg: "p-8"
                }[r], c, t),
                onClick: i,
                children: s
            })
        }
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [655, 961, 805, 441, 684, 358], () => s(4356)),
        _N_E = e.O()
}
]);
