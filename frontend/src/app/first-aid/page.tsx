"use client";

import { useState } from "react";

export default function FirstAidPage() {
  const [activeCategory, setActiveCategory] = useState("지혈/압박");

  const categories = [
    { id: "cpr", name: "심폐소생술", icon: "❤️" },
    { id: "heimlich", name: "하임리히법", icon: "⚡" },
    { id: "airway", name: "기도 확보", icon: "🌬️" },
    { id: "bleeding", name: "지혈/압박", icon: "🩸" },
    { id: "burn", name: "화상", icon: "🔥" },
    { id: "drowning", name: "익수 / 저체온", icon: "🥶" },
    { id: "fracture", name: "골절 / 탈구", icon: "🦴" },
    { id: "wound", name: "상처 세척", icon: "🩹" }
  ];

  return (
    <div className="flex-1 w-full flex flex-col min-h-0 bg-[#020617]">
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 overflow-hidden">
        
        {/* Left Column: Visual Guide (3/12) */}
        <div className="lg:col-span-3 flex flex-col bg-[#0b1120] border border-slate-800 rounded-3xl overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-white font-bold text-sm">처치 동작 시각 가이드</h3>
          </div>
          <div className="flex-1 bg-black flex items-center justify-center relative">
            <p className="text-teal-400 font-bold">지혈/압박 일러스트 준비 중</p>
          </div>
        </div>

        {/* Center Column: Instructions (6/12) */}
        <div className="lg:col-span-6 flex flex-col bg-[#0b1120] border border-slate-800 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 relative">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 bg-rose-500 rounded text-white text-xs font-bold">RISK LEVEL 3</span>
              <span className="text-rose-400 text-sm font-bold">AI 진단 : 외상성 대량 출혈(Hemorrhage)</span>
            </div>
            <h2 className="text-3xl font-black text-white">출혈 부위 직접 압박</h2>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6">
            
            {/* Do & Don'ts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                <h4 className="text-emerald-400 text-sm font-bold mb-2">권고 사항</h4>
                <ul className="space-y-1.5">
                  <li className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span> 출혈 부위를 심장보다 높게 유지하세요
                  </li>
                  <li className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span> 지혈대 사용 시 착용 시각을 환자의 몸에 기록하세요
                  </li>
                </ul>
              </div>
              <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-4">
                <h4 className="text-rose-400 text-sm font-bold mb-2">절대 금기</h4>
                <ul className="space-y-1.5">
                  <li className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5">•</span> 상처에 박힌 칼 등을 억지로 뽑지 마세요
                  </li>
                  <li className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5">•</span> 가루약, 된장 등 이물질을 바르지 마세요
                  </li>
                </ul>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="text-white font-bold mb-1.5">상처 노출 및 확인</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">옷을 가위로 잘라 상처 부위를 완전히 드러내고 정확한 출혈 지점을 확인하십시오.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="text-white font-bold mb-1.5">직접 압박 시행</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">멸균 거즈나 깨끗한 천을 대고 손바닥 전체로 체중을 실어 강하게 누르십시오.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 flex gap-4 items-start relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none"></div>
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="text-white font-bold mb-1.5">지혈대(T-kit) 적용</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">직접 압박으로 출혈이 멈추지 않을 경우 출혈 부위에서 5~10cm 위쪽(심장과 가까운 쪽)에 지혈대를 착용하십시오. 지혈대 착용 시간을 반드시 환자의 이마나 잘 보이는 곳에 기록해야 합니다.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Vitals & Timeline (3/12) */}
        <div className="lg:col-span-3 flex flex-col gap-4 min-h-0 overflow-y-auto">
          
          {/* Profile Card */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-5 flex items-center gap-4">
             <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 overflow-hidden shrink-0">
               <span className="text-slate-400 text-sm font-bold">사진</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-tight">박기관</h2>
                <span className="text-teal-400 font-medium text-xs">기관장</span>
              </div>
              <p className="text-slate-500 text-[10px]">ID : S26-003</p>
            </div>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-4">
              <p className="text-rose-400/70 text-xs mb-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                심박수
              </p>
              <p className="text-xl font-bold text-rose-500">96<span className="text-xs font-medium ml-0.5">bpm</span></p>
            </div>
            
            <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-4">
              <p className="text-rose-400/70 text-xs mb-1 flex items-center gap-1">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                산소포화도
              </p>
              <p className="text-xl font-bold text-rose-500">94.2<span className="text-xs font-medium ml-0.5">%</span></p>
            </div>
            
            <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-4">
              <p className="text-rose-400/70 text-xs mb-1 flex items-center gap-1">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                호흡수
              </p>
              <p className="text-xl font-bold text-rose-500">24<span className="text-xs font-medium ml-0.5">/min</span></p>
            </div>

            <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-4 col-span-2">
              <p className="text-rose-400/70 text-xs mb-1 flex items-center gap-1">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                혈압
              </p>
              <p className="text-2xl font-bold text-rose-500">158/95<span className="text-xs font-medium ml-1">mmHg</span></p>
            </div>
            
             <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-4 col-span-2 flex justify-between items-center">
              <div>
                <p className="text-amber-500/70 text-xs mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  체온
                </p>
                <p className="text-xl font-bold text-amber-500">37.6<span className="text-xs font-medium ml-0.5">°C</span></p>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-5 flex-1 min-h-[200px]">
            <h3 className="text-teal-400 text-sm font-bold flex items-center gap-2 mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              대응 타임라인
            </h3>
             <div className="relative pl-4 space-y-4 before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
               <div className="relative">
                <div className="absolute -left-[15px] w-2.5 h-2.5 rounded-full bg-cyan-500 z-10 mt-1"></div>
                <p className="text-slate-300 text-xs">AI 대응 가이드 제공</p>
                <p className="text-slate-500 text-[10px]">09:18</p>
               </div>
               <div className="relative">
                <div className="absolute -left-[15px] w-2.5 h-2.5 rounded-full bg-slate-600 z-10 mt-1"></div>
                <p className="text-slate-500 text-xs">원격 의료진 화상 연결 대기</p>
                <p className="text-slate-600 text-[10px]">09:20 예정</p>
               </div>
             </div>
          </div>

        </div>

      </div>

      {/* Bottom Categories Bar */}
      <div className="w-full h-16 bg-[#0b1120] border-t border-slate-800 px-6 flex items-center gap-4 overflow-x-auto custom-scrollbar shrink-0">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-6 h-10 rounded-xl whitespace-nowrap text-sm font-bold transition-colors ${
                isActive 
                  ? "bg-rose-500 text-white" 
                  : "bg-[#0f172a] text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-600"
              }`}
            >
              {cat.icon && <span>{cat.icon}</span>}
              {cat.name}
            </button>
          );
        })}
      </div>

    </div>
  );
}
