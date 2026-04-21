"use client";

import { useState } from "react";

export default function ChartPage() {
  const [painLevel, setPainLevel] = useState<number | null>(7);
  const [newsLevel, setNewsLevel] = useState<string>("caution");

  return (
    <div className="flex-1 w-full p-4 lg:p-6 flex flex-col gap-6 min-h-0 bg-[#020617] overflow-y-auto">
      
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Left: Patient Selector & Name */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/50 text-rose-400 px-4 py-2 rounded-xl text-sm font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            [위급] 박기관 (기관장)
            <svg className="w-4 h-4 ml-2 text-rose-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-slate-300 font-bold">
              박
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-tight">박기관</h2>
                <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  위급 환자
                </span>
              </div>
              <p className="text-slate-500 text-xs mt-0.5">기관장 · 55세 · B+형</p>
            </div>
          </div>
        </div>

        {/* Right: Vitals */}
        <div className="flex gap-3">
          <div className="border border-rose-500/30 bg-[#0b1120] rounded-xl px-4 py-2 flex items-center gap-3">
             <div>
              <p className="text-slate-500 text-[10px] mb-0.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                혈압
              </p>
              <p className="text-rose-400 font-bold text-lg leading-none">158/95<span className="text-[10px] font-normal ml-0.5">mmHg</span></p>
            </div>
          </div>
          <div className="border border-slate-800 bg-[#0b1120] rounded-xl px-4 py-2 flex items-center gap-3">
             <div>
              <p className="text-slate-500 text-[10px] mb-0.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                심박
              </p>
              <p className="text-slate-200 font-bold text-lg leading-none">92<span className="text-[10px] font-normal ml-0.5">bpm</span></p>
            </div>
          </div>
          <div className="border border-amber-500/30 bg-[#0b1120] rounded-xl px-4 py-2 flex items-center gap-3">
             <div>
              <p className="text-slate-500 text-[10px] mb-0.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                체온
              </p>
              <p className="text-amber-400 font-bold text-lg leading-none">37.8<span className="text-[10px] font-normal ml-0.5">°C</span></p>
            </div>
          </div>
          <div className="border border-cyan-500/30 bg-[#0b1120] rounded-xl px-4 py-2 flex items-center gap-3">
             <div>
              <p className="text-slate-500 text-[10px] mb-0.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                산소
              </p>
              <p className="text-cyan-400 font-bold text-lg leading-none">94<span className="text-[10px] font-normal ml-0.5">%</span></p>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 w-full mb-2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
        
        {/* Left Profile Sidebar (3/12) */}
        <div className="lg:col-span-3 space-y-6">
          
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-5">
            <h3 className="text-cyan-400 text-sm font-bold flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              기본 인적사항
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-slate-800/50 pb-2">
                <span className="text-slate-500">생년월일</span>
                <span className="text-slate-200 font-medium">1971-08-05</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/50 pb-2">
                <span className="text-slate-500">신장/체중</span>
                <span className="text-slate-200 font-medium">172cm / 70kg</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-slate-500 whitespace-nowrap mr-4">비상연락</span>
                <span className="text-slate-200 font-medium text-right">배우자 (010-3344-5566)</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-5">
            <h3 className="text-amber-500 text-sm font-bold flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              과거 병력 (기저질환)
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#1a1f33] border border-slate-700 rounded-md text-amber-500 text-xs font-medium">고혈압</span>
              <span className="px-3 py-1 bg-[#1a1f33] border border-slate-700 rounded-md text-amber-500 text-xs font-medium">고지혈증</span>
            </div>
          </div>

          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-5">
            <h3 className="text-rose-500 text-sm font-bold flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              알레르기 주의
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-md text-rose-400 text-xs font-medium">아스피린</span>
            </div>
          </div>

        </div>

        {/* Right Form Area (9/12) */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* STEP 1 */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-cyan-400 font-bold mb-1 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              STEP 1. 환자 증상 파악 (Subjective)
            </h3>
            <p className="text-slate-500 text-xs mb-6 pl-8">환자가 어디가 어떻게 아프다고 하나요?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8 mb-6">
              <div>
                <label className="block text-slate-400 text-xs mb-2">발생 시각 및 장소</label>
                <input type="text" placeholder="예: 오전 10:30, 2번 데크 작업 중" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500/50" />
              </div>
              <div>
                <label className="block text-slate-400 text-xs mb-2">통증 부위</label>
                <input type="text" placeholder="예: 오른쪽 발목, 가슴 답답함 등" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500/50" />
              </div>
            </div>

            <div className="pl-8">
              <label className="block text-slate-400 text-xs mb-4">통증 강도 (0: 없음 ~ 10: 참을 수 없음)</label>
              <div className="flex justify-between max-w-3xl">
                {[0,1,2,3,4,5,6,7,8,9,10].map((num) => (
                  <button 
                    key={num}
                    onClick={() => setPainLevel(num)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      painLevel === num 
                        ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-110' 
                        : 'bg-[#0f172a] border border-slate-800 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6">
             <h3 className="text-teal-400 font-bold mb-1 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              </div>
              STEP 2. 눈으로 확인되는 상태 (Objective)
            </h3>
            <p className="text-slate-500 text-xs mb-6 pl-8">관리자가 직접 확인한 사실을 선택해 주세요.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-8 mb-6">
              {['외부 출혈 있음', '심한 부종(부어오름)', '뼈 돌출/골절 의심', '의식 혼미/상실', '호흡 곤란', '안색 창백/청색증'].map((item) => (
                <label key={item} className="flex items-center gap-3 p-3 bg-[#0f172a] border border-slate-800 rounded-xl cursor-pointer hover:border-slate-700 transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-teal-500 focus:ring-teal-500/50" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </label>
              ))}
            </div>

            <div className="pl-8">
              <button className="w-full py-3.5 border border-dashed border-teal-500/50 bg-teal-500/5 hover:bg-teal-500/10 text-teal-400 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                환부 사진 촬영 및 첨부
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* STEP 3 */}
            <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6">
              <h3 className="text-emerald-400 font-bold mb-1 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                STEP 3. 의료 판단 (NEWS/MEWS)
              </h3>
              <p className="text-slate-500 text-xs mb-6 pl-8">현재 환자의 상태 단계는 무엇인가요?</p>

              <div className="space-y-3 pl-8">
                {/* Normal */}
                <div 
                  onClick={() => setNewsLevel('normal')}
                  className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-colors ${newsLevel === 'normal' ? 'bg-[#0f172a] border-emerald-500/50' : 'bg-transparent border-slate-800 hover:border-slate-700'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <div>
                      <p className="text-slate-200 text-sm font-bold">정상 (Normal)</p>
                      <p className="text-slate-500 text-[10px]">정기적 모니터링</p>
                    </div>
                  </div>
                  {newsLevel === 'normal' && <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                </div>

                {/* Mild */}
                <div 
                  onClick={() => setNewsLevel('mild')}
                  className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-colors ${newsLevel === 'mild' ? 'bg-[#0f172a] border-yellow-400/50' : 'bg-transparent border-slate-800 hover:border-slate-700'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <div>
                      <p className="text-slate-200 text-sm font-bold">경미 (Mild)</p>
                      <p className="text-slate-500 text-[10px]">관찰 주기 단축</p>
                    </div>
                  </div>
                  {newsLevel === 'mild' && <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                </div>

                {/* Caution */}
                <div 
                  onClick={() => setNewsLevel('caution')}
                  className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-colors ${newsLevel === 'caution' ? 'bg-[#0f172a] border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.1)]' : 'bg-transparent border-slate-800 hover:border-slate-700'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                    <div>
                      <p className="text-orange-400 text-sm font-bold">주의 (Caution)</p>
                      <p className="text-slate-500 text-[10px]">의료 처치 준비</p>
                    </div>
                  </div>
                  {newsLevel === 'caution' && (
                    <div className="w-5 h-5 rounded-full border border-orange-400 flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </div>

                {/* Danger */}
                <div 
                  onClick={() => setNewsLevel('danger')}
                  className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-colors ${newsLevel === 'danger' ? 'bg-[#0f172a] border-rose-500/50' : 'bg-transparent border-slate-800 hover:border-slate-700'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <div>
                      <p className="text-slate-200 text-sm font-bold">위험 (Danger)</p>
                      <p className="text-slate-500 text-[10px]">긴급 이송 및 회항</p>
                    </div>
                  </div>
                  {newsLevel === 'danger' && <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                </div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 flex flex-col">
              <h3 className="text-teal-400 font-bold mb-1 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                STEP 4. 조치 내역 및 계획
              </h3>
              <p className="text-slate-500 text-xs mb-6 pl-8">어떤 도움을 주었나요?</p>

              <div className="pl-8 flex-1 flex flex-col">
                <textarea 
                  className="w-full flex-1 bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 resize-none mb-6 min-h-[160px]"
                  placeholder="예: 상처 부위 소독 후 압박 붕대 실시. 타이레놀 1정 복용함. 1시간 뒤 다시 체크 예정."
                ></textarea>

                <div className="flex justify-end mt-auto">
                  <button className="bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    차트 저장 및 원격 보고
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
