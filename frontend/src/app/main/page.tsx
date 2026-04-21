export default function DashboardPage() {
  return (
    <div className="flex-1 w-full p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 bg-[#020617]">
      
      {/* Left Column: Patient Profile (3/12) */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-slate-700 overflow-hidden shrink-0">
            {/* Avatar placeholder */}
            <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">박기관</h2>
              <span className="text-teal-400 font-medium text-sm">기관장</span>
            </div>
            <p className="text-slate-500 text-xs">ID : S26-003</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-slate-400 text-xs mb-1">나이/성별</p>
            <p className="text-xl font-bold text-white">48세 <span className="text-slate-500 font-normal">/</span> 남</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs mb-1">혈액형</p>
            <p className="text-xl font-bold text-white">B+</p>
          </div>
        </div>
        
        <div>
          <p className="text-slate-400 text-xs mb-1">과거력</p>
          <p className="text-sm font-medium text-slate-200">고지혈증, 가벼운 고혈압</p>
        </div>

        {/* Body Info */}
        <div>
          <h3 className="text-teal-400 text-xs font-semibold mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            신체 정보
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0b1120] rounded-xl border border-slate-800 p-3 text-center">
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">신장</p>
              <p className="text-white font-bold text-lg">176<span className="text-xs text-slate-400 ml-0.5">cm</span></p>
            </div>
            <div className="bg-[#0b1120] rounded-xl border border-slate-800 p-3 text-center">
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">체중</p>
              <p className="text-white font-bold text-lg">78<span className="text-xs text-slate-400 ml-0.5">kg</span></p>
            </div>
          </div>
        </div>

        {/* Allergies */}
        <div>
          <h3 className="text-red-400 text-xs font-semibold mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            알레르기 / 주의사항
          </h3>
          <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-3">
            <p className="text-red-400 text-sm font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 아스피린 (민감)
            </p>
          </div>
        </div>

        {/* Medications */}
        <div>
          <h3 className="text-orange-400 text-xs font-semibold mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            복용 중인 약물
          </h3>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center bg-[#0b1120] border border-orange-500/20 rounded-xl p-3">
              <div>
                <p className="text-slate-200 text-sm font-medium">혈압약 (암로디핀)</p>
                <p className="text-slate-500 text-[10px]">매일 08:00</p>
              </div>
              <span className="text-orange-400 text-xs font-semibold">고혈압</span>
            </div>
            <div className="flex justify-between items-center bg-[#0b1120] border border-orange-500/20 rounded-xl p-3">
              <div>
                <p className="text-slate-200 text-sm font-medium">고지혈증약 (아토르바스타틴)</p>
                <p className="text-slate-500 text-[10px]">매일 21:00</p>
              </div>
              <span className="text-orange-400 text-xs font-semibold">고지혈증</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-800">
          <button className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            응급 처치 액션 시작
          </button>
        </div>
      </div>

      {/* Center & Right Column Wrapper (9/12) */}
      <div className="lg:col-span-9 flex flex-col gap-6">
        
        {/* Top Vitals Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-4 relative">
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
            <p className="text-slate-400 text-xs mb-1 text-center">심박수</p>
            <p className="text-3xl font-black text-rose-500 text-center flex items-baseline justify-center gap-1">
              96<span className="text-xs font-medium text-slate-500">bpm</span>
            </p>
          </div>
          <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-4 relative">
            <p className="text-slate-400 text-xs mb-1 text-center">산소포화도</p>
            <p className="text-3xl font-black text-blue-400 text-center flex items-baseline justify-center gap-1">
              94<span className="text-xs font-medium text-slate-500">%</span>
            </p>
          </div>
          <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-4 relative">
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-slate-400 text-xs mb-1 text-center">호흡수</p>
            <p className="text-3xl font-black text-emerald-400 text-center flex items-baseline justify-center gap-1">
              17<span className="text-xs font-medium text-slate-500">/min</span>
            </p>
          </div>
          <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-4 relative">
            <div className="absolute top-3 right-3">
               <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <p className="text-slate-400 text-xs mb-1 text-center">혈압 (입력)</p>
            <p className="text-3xl font-black text-fuchsia-400 text-center flex items-baseline justify-center gap-1">
              158/95<span className="text-xs font-medium text-slate-500">mmHg</span>
            </p>
          </div>
          <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-4 relative">
             <div className="absolute top-3 right-3">
               <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <p className="text-slate-400 text-xs mb-1 text-center">체온 (입력)</p>
            <p className="text-3xl font-black text-amber-500 text-center flex items-baseline justify-center gap-1">
              37.6<span className="text-xs font-medium text-slate-500">°C</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 flex-1 min-h-0">
          
          {/* AI Chat Report (4/7 of remaining) */}
          <div className="lg:col-span-4 flex flex-col bg-[#0b1120] border border-slate-800 rounded-3xl p-5 relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                실시간 분석 리포트
              </h3>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold rounded">AI ACTIVE</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar pb-20">
              
              {/* Message 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v5h-2v-5z"/></svg>
                </div>
                <div className="bg-slate-800/50 rounded-2xl rounded-tl-none p-4 border border-slate-700/50">
                  <p className="text-slate-300 text-sm mb-3">
                    박기관 기관장 (48세, 고지혈증·고혈압) 환자 데이터가 로드되었습니다.
                  </p>
                  <p className="text-slate-200 text-sm font-medium flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5">⚠️</span> 
                    현재 사고 발생 중 — 기관실 제2엔진 추락 외상. 즉각 대응이 필요합니다.
                  </p>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/></svg>
                </div>
                <div className="bg-cyan-900/20 rounded-2xl rounded-tl-none p-5 border border-cyan-500/20 w-full">
                  <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    현재 상태 요약
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><span className="text-slate-400 mr-2">•</span><span className="text-slate-500 text-xs">사고 경위:</span> 기관실 제2엔진 점검 중 약 1.8m 추락</li>
                    <li><span className="text-slate-400 mr-2">•</span><span className="text-slate-500 text-xs">주요 소견:</span> 좌측 흉부 압통, 어깨 변형, 호흡 시 통증 심화</li>
                    <li><span className="text-slate-400 mr-2">•</span><span className="text-slate-500 text-xs">AI 분석:</span> 다발성 늑골·쇄골 골절 의심 <span className="text-cyan-400 text-xs ml-1">(신뢰도 91%)</span></li>
                    <li><span className="text-slate-400 mr-2">•</span><span className="text-slate-500 text-xs">바이탈:</span> HR 96bpm / BP 158/95 / SpO₂ 94% / BT 37.6°C</li>
                  </ul>
                </div>
              </div>

              {/* Suggestions */}
              <div className="flex justify-end pt-2">
                <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2 rounded-full border border-slate-700 transition-colors">
                  환자 현재 상태 요약
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-5 left-5 right-5 space-y-3 bg-[#0b1120] pt-2">
              <div className="relative flex items-center">
                <div className="absolute left-4">
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="환자 상태 또는 처치 방법에 대해 질문하세요..." 
                  className="w-full bg-slate-900 border border-slate-700 rounded-full py-3.5 pl-12 pr-24 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50"
                />
                <div className="absolute right-2 flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  </button>
                  <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold transition-colors flex items-center gap-1">
                    전송
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </button>
                </div>
              </div>
              <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                외상 촬영 & AI 분석
              </button>
            </div>
          </div>

          {/* Accident & Treatment Timeline (3/7 of remaining) */}
          <div className="lg:col-span-3 flex flex-col bg-[#0b1120] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              사고 및 처치 타임라인
            </h3>

            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
              
              {/* Node 1: Accident */}
              <div className="relative">
                <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#0b1120] border-[3px] border-rose-500 z-10"></div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-rose-500 text-xs font-bold">09:12 · 사고 발생</span>
                </div>
                <h4 className="text-white font-bold mb-3">기관실 2층 추락 발생</h4>
                
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800/50 space-y-2">
                  <div className="grid grid-cols-[40px_1fr] gap-2">
                    <span className="text-slate-500 text-xs">장소</span>
                    <span className="text-slate-300 text-sm">기관실 제2엔진 구역 (2F)</span>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] gap-2">
                    <span className="text-slate-500 text-xs">경위</span>
                    <span className="text-slate-300 text-sm leading-relaxed">점검 중 발판 이탈로 1.8m 추락</span>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] gap-2 items-start mt-1">
                    <span className="text-slate-500 text-xs mt-0.5">부상 상태</span>
                    <span className="text-rose-400 text-sm font-bold leading-relaxed">중증 외상 (흉부 및 어깨 골절)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <span className="text-cyan-400 text-xs font-bold bg-[#0b1120] py-1 absolute -left-[18px] transform -translate-x-1/2">
                  처치 진행 현황
                </span>
                <div className="absolute left-[11px] h-8 w-[2px] bg-cyan-500 top-auto z-0 transform -translate-y-6"></div>
              </div>

              {/* Node 2 */}
              <div className="relative mt-8">
                <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#0b1120] border-[3px] border-cyan-500 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 flex justify-between items-center">
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      가이드 제공
                    </h5>
                    <p className="text-slate-500 text-[10px]">AI 골절 대응 프로토콜 가동 — 09:18</p>
                  </div>
                  <span className="text-cyan-400 text-xs font-bold">진행완료</span>
                </div>
              </div>

              {/* Node 3 */}
              <div className="relative">
                <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#0b1120] border-[3px] border-cyan-500 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 flex justify-between items-center">
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      이송 조치
                    </h5>
                    <p className="text-slate-500 text-[10px]">의무실 이송 (척추보드 결착) — 09:25</p>
                  </div>
                  <span className="text-cyan-400 text-xs font-bold">이송완료</span>
                </div>
              </div>

              {/* Node 4 */}
              <div className="relative">
                <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#0b1120] border-[3px] border-slate-600 z-10"></div>
                <div className="bg-slate-900/20 rounded-xl p-4 border border-slate-800 flex justify-between items-center opacity-60">
                  <div>
                    <h5 className="text-slate-300 font-bold text-sm mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      처치 완료
                    </h5>
                    <p className="text-slate-500 text-[10px]">산소 공급 및 진통제 투여 — 09:40</p>
                  </div>
                  <span className="text-rose-400 text-xs font-bold">완료됨</span>
                </div>
              </div>

              {/* Node 5 */}
              <div className="relative">
                <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#0b1120] border-[3px] border-slate-600 z-10"></div>
                <div className="bg-slate-900/20 rounded-xl p-4 border border-slate-800 flex justify-between items-center opacity-60">
                  <div>
                    <h5 className="text-slate-300 font-bold text-sm mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      현재 경과
                    </h5>
                    <p className="text-slate-500 text-[10px]">해경 헬기 인계 준비 중 — 10:15</p>
                  </div>
                  <span className="text-amber-400 text-xs font-bold">후송 대기</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
