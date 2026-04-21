"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GNB() {
  const pathname = usePathname();
  
  // 로그인 화면에서는 GNB 숨김
  if (pathname === '/') return null;

  const navItems = [
    { name: "메인", path: "/main" },
    { name: "환자 차트", path: "/chart" },
    { name: "선원 관리", path: "/crew" },
    { name: "응급 처치", path: "/first-aid" },
    { name: "시스템 설정", path: "/settings" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0b1120]">
      <div className="w-full px-6 h-[72px] flex items-center justify-between">
        
        {/* Left: Logo & Nav */}
        <div className="flex items-center h-full">
          <Link href="/main" className="flex items-center gap-2 mr-10">
            <svg className="w-6 h-6 text-slate-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2zm6 8a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 001 1h2v4.5A4.502 4.502 0 0012 21a4.502 4.502 0 003-4.5V13h2a1 1 0 001-1v-2zm-6 9.5a2.5 2.5 0 01-2.5-2.5V13h5v4.5a2.5 2.5 0 01-2.5 2.5z" />
            </svg>
            <span className="text-xl font-bold text-white tracking-wider">MDTS</span>
          </Link>

          <nav className="hidden md:flex h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center px-6 h-full text-lg font-medium transition-colors border-b-4 ${
                    isActive
                      ? "text-teal-400 border-teal-400"
                      : "text-slate-400 border-transparent hover:text-slate-200"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Status & Admin */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded border border-green-500/30 bg-green-500/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-green-400">ON LINE</span>
          </div>
          
          <div className="flex items-center text-sm font-medium text-slate-300">
            <span className="text-slate-200">KOREA STAR</span>
            <span className="mx-3 text-slate-600">|</span>
            <span className="text-slate-400">MED-01</span>
          </div>
          
          <Link href="/" className="text-slate-400 hover:text-white transition-colors" title="로그아웃">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </Link>
        </div>
        
      </div>
    </header>
  );
}
