"use client";

import Link from "next/link";

export default function NewCrewPage() {
  return (
    <div className="flex-1 w-full p-4 lg:p-8 flex flex-col items-center bg-[#020617] overflow-y-auto">
      
      <div className="w-full max-w-4xl space-y-8 pb-20">
        
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
          <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center border border-teal-500/20">
            <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">신규 선원 프로필 생성</h1>
            <p className="text-slate-500 text-sm mt-1">시스템에 등록될 선원의 상세 정보를 입력해 주세요.</p>
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-6">
          
          {/* Section 1: Basic Info */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 bottom-0 right-0 w-2 bg-teal-500/20"></div>
            
            <h3 className="text-cyan-400 font-bold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              기본 인적사항
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">선원 성명</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <input type="text" placeholder="실명을 입력하세요" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-200 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">생년월일</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <input type="text" placeholder="연도-월-일" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-10 text-slate-200 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">성별</label>
                <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none">
                  <option>남</option>
                  <option>여</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">만 나이</label>
                <div className="relative">
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 pr-8 text-slate-200 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500 text-sm">세</div>
                </div>
              </div>
              
              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">혈액형</label>
                <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-white text-sm font-bold focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none">
                  <option>A+형</option>
                  <option>B+형</option>
                  <option>O+형</option>
                  <option>AB+형</option>
                  <option>A-형</option>
                  <option>B-형</option>
                  <option>O-형</option>
                  <option>AB-형</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">신장 (cm)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </div>
                  <input type="text" placeholder="" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-8 text-slate-200 text-sm font-bold focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 text-sm font-bold">cm</div>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">체중 (kg)</label>
                <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                  </div>
                  <input type="text" placeholder="" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-8 text-slate-200 text-sm font-bold focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 text-sm font-bold">kg</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Embarkation Info */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 lg:p-8">
            <h3 className="text-orange-400 font-bold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              소속 및 승선 정보
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">소속 부서</label>
                <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-white font-bold text-sm focus:outline-none focus:border-orange-500/50 transition-colors appearance-none">
                  <option>항해부</option>
                  <option>기관부</option>
                  <option>통신부</option>
                  <option>조리부</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">직급</label>
                <input type="text" placeholder="Position" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-slate-200 font-bold text-sm focus:outline-none focus:border-orange-500/50 transition-colors" />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">승선 일자</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <input type="text" placeholder="연도-월-일" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-10 text-slate-200 text-sm focus:outline-none focus:border-orange-500/50 transition-colors" />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">현재 위치/구역</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <input type="text" placeholder="브릿지, 데크 등" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-200 text-sm focus:outline-none focus:border-orange-500/50 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Medical Info */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 lg:p-8">
            <h3 className="text-teal-400 font-bold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              의료 정보 및 연락처
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">기저질환</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <input type="text" placeholder="없음" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white font-bold text-sm focus:outline-none focus:border-teal-500/50 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">알레르기</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <input type="text" placeholder="없음" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white font-bold text-sm focus:outline-none focus:border-teal-500/50 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">최근 투약 항목</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                  </div>
                  <input type="text" placeholder="없음" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white font-bold text-sm focus:outline-none focus:border-teal-500/50 transition-colors" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  과거 병력 및 수술 이력
                </label>
                <textarea 
                  placeholder="상세 과거력을 입력하세요" 
                  className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 resize-none min-h-[100px]"
                ></textarea>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                  관리 특이사항 (메모)
                </label>
                <textarea 
                  placeholder="건강관리 상 주의사항 입력" 
                  className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 resize-none min-h-[100px]"
                ></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">본인 연락처</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <input type="text" placeholder="010-0000-0000" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-300 font-bold text-sm focus:outline-none focus:border-teal-500/50 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold mb-2">비상 연락처 (관계 포함)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <input type="text" placeholder="010-0000-0000 (관계)" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-300 font-bold text-sm focus:outline-none focus:border-teal-500/50 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-4 mt-8">
          <Link href="/" className="w-1/3">
            <button type="button" className="w-full py-4 bg-[#0b1120] hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold rounded-2xl transition-colors">
              등록 취소
            </button>
          </Link>
          <button type="button" className="flex-1 py-4 bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold rounded-2xl transition-colors shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]">
            선원 데이터 저장 및 시스템 등록
          </button>
        </div>

      </div>
    </div>
  );
}
