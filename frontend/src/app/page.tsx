"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex-1 w-full min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Typography & Brand */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-teal-400 font-bold tracking-widest text-sm uppercase">Maritime Medical AI System</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            선박 탑재형<br />
            엣지 의료 지원<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              AI Medical System
            </span>
          </h1>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-800/50">
            <div>
              <p className="text-white font-bold text-lg">24H</p>
              <p className="text-slate-400 text-xs">실시간 바이탈</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">AI 8종</p>
              <p className="text-slate-400 text-xs">응급처치 분류</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">심층 25단계</p>
              <p className="text-slate-400 text-xs">처치 프로토콜</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm bg-[#0b1120]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none"></div>
            
            <div className="flex flex-col items-center mb-10 relative z-10">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 mb-6 shadow-inner">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20m0 0l-4-4m4 4l4-4m-9-6a9 9 0 1118 0" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-white tracking-widest mb-2">MDTS</h2>
              <p className="text-teal-400 text-sm font-medium">바다 위 어디서든, 멈추지 않는 의료 AI</p>
            </div>

            <form className="space-y-4 relative z-10">
              {/* Inputs matching screenshot (readonly state for Edge system auto-config) */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <input type="text" readOnly value="SN-0001" className="w-full pl-11 pr-4 py-3 bg-[#0f172a] border border-slate-800 rounded-xl text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 cursor-default" />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input type="text" readOnly value="MED-01" className="w-full pl-11 pr-4 py-3 bg-[#0f172a] border border-slate-800 rounded-xl text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 cursor-default" />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <input type="text" readOnly value="KOREA STAR" className="w-full pl-11 pr-4 py-3 bg-[#0f172a] border border-slate-800 rounded-xl text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 cursor-default" />
              </div>

              <button 
                type="button" 
                onClick={() => router.push('/main')}
                className="w-full mt-8 py-3.5 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-[#020617] font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
              >
                시스템 접속
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
