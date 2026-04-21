"use client";

import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);

  return (
    <div className="flex-1 w-full p-4 lg:p-8 flex flex-col items-center bg-[#020617] overflow-y-auto">
      
      <div className="w-full max-w-5xl space-y-6 pb-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              기기 및 통신 관리
            </h1>
            <p className="text-slate-500 text-sm mt-2">우리 배의 의료 시스템이 잘 작동하고 있는지 확인하는 곳입니다.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              MV KOREA STAR
            </span>
            <span className="bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              관리자 : 이선장
            </span>
          </div>
        </div>

        {/* Section 1: Device Info */}
        <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-teal-400 font-bold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              기기 등록 정보 관리
            </h3>
            <button className="bg-slate-900 border border-slate-700 hover:border-slate-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              정보 수정하기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-slate-500 text-xs mb-2">현재 선박명</p>
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl px-5 py-4">
                <p className="text-white font-bold tracking-widest text-lg">MV KOREA STAR</p>
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-xs mb-2">기기 관리 번호</p>
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl px-5 py-4">
                <p className="text-white font-bold tracking-widest text-lg">MED-001</p>
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-xs mb-2">기기 시리얼 번호 (S/N)</p>
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl px-5 py-4">
                <p className="text-white font-bold tracking-widest text-lg">SN-2026-X99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Section 2: Connection Status */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 flex flex-col gap-6">
             <h3 className="text-cyan-400 font-bold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
              육상과 연결 상태
            </h3>

            <div className="space-y-4">
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">위성 인터넷 (스타링크)</h4>
                      <p className="text-slate-500 text-[10px] mt-0.5">반응 속도: 37 ms (매우 빠름)</p>
                    </div>
                  </div>
                  <span className="text-teal-400 text-sm font-bold">정상 작동 중</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 w-[85%] rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                </div>
              </div>

              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">의료 센터로 데이터 보내기</h4>
                      <p className="text-slate-500 text-[10px] mt-0.5">방금 전 모든 정보가 전송되었습니다.</p>
                    </div>
                  </div>
                  <span className="text-blue-400 text-sm font-bold">전송 완료</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4">
                <p className="text-slate-500 text-[10px] mb-1">인터넷 신호 강도</p>
                <p className="text-rose-500 font-bold">매우 좋음</p>
              </div>
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4">
                <p className="text-slate-500 text-[10px] mb-1">데이터 전송 속도</p>
                <p className="text-cyan-400 font-bold">쾌적함</p>
              </div>
            </div>
          </div>

          {/* Section 3: Device Operation Status */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 flex flex-col gap-6">
             <h3 className="text-orange-400 font-bold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              기기 작동 상태
            </h3>

            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-white text-sm font-bold">기기 머리 쓰는 중 (CPU)</p>
                  <span className="text-white text-xs font-bold">여유로움</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 w-[20%] rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-white text-sm font-bold">동시 작업 가능량 (메모리)</p>
                  <span className="text-white text-xs font-bold">넉넉함</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400 w-[45%] rounded-full shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-white text-sm font-bold">기록 저장 공간</p>
                  <span className="text-white text-xs font-bold">많이 남음</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-[15%] rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-3 gap-3 mt-auto">
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <p className="text-white text-xs font-bold mb-2">혈압계</p>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-sm bg-teal-400"></div>
                  <span className="text-teal-400 text-sm font-bold">82%</span>
                </div>
                <p className="text-slate-500 text-[10px]">연결됨</p>
              </div>
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <p className="text-white text-xs font-bold mb-2">산소계</p>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-sm bg-teal-400"></div>
                  <span className="text-teal-400 text-sm font-bold">45%</span>
                </div>
                <p className="text-slate-500 text-[10px]">연결됨</p>
              </div>
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <p className="text-white text-xs font-bold mb-2">카메라</p>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-sm bg-teal-400"></div>
                  <span className="text-teal-400 text-sm font-bold">100%</span>
                </div>
                <p className="text-slate-500 text-[10px]">대기 중</p>
              </div>
            </div>
          </div>

          {/* Section 4: Recent Logs */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 flex flex-col">
             <h3 className="text-indigo-400 font-bold flex items-center gap-2 mb-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              최근 시스템 기록
            </h3>

            <div className="space-y-4 mb-6 flex-1">
              <div className="flex items-start gap-3 border-b border-slate-800/50 pb-3">
                <span className="text-slate-500 text-xs mt-0.5 shrink-0">[15:32]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span>
                <p className="text-white text-sm font-bold leading-snug">환자 정보가 육상으로 잘 전달되었습니다.</p>
              </div>
              <div className="flex items-start gap-3 border-b border-slate-800/50 pb-3">
                <span className="text-slate-500 text-xs mt-0.5 shrink-0">[14:10]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                <p className="text-white text-sm font-bold leading-snug">육상 의료진과 대화 창을 열었습니다.</p>
              </div>
              <div className="flex items-start gap-3 border-b border-slate-800/50 pb-3">
                <span className="text-slate-500 text-xs mt-0.5 shrink-0">[12:45]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                <p className="text-white text-sm font-bold leading-snug">경보 : 이선장 선원의 혈압이 조금 높습니다.</p>
              </div>
              <div className="flex items-start gap-3 border-b border-slate-800/50 pb-3">
                <span className="text-slate-500 text-xs mt-0.5 shrink-0">[09:20]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span>
                <p className="text-white text-sm font-bold leading-snug">보안 시스템이 최신 버전으로 업데이트되었습니다.</p>
              </div>
            </div>

            <button className="w-full py-3 bg-[#0f172a] hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold rounded-xl transition-colors">
              더 많은 기록 보기
            </button>
          </div>

          {/* Section 5: Security Settings */}
          <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-6 flex flex-col">
             <h3 className="text-rose-400 font-bold flex items-center gap-2 mb-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              비밀번호 및 보안 설정
            </h3>

            <div className="space-y-6 mb-8 flex-1">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-4">
                <span className="text-slate-300 text-sm font-medium">지문/얼굴 인식으로 로그인하기</span>
                <button 
                  onClick={() => setToggle1(!toggle1)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${toggle1 ? 'bg-teal-400' : 'bg-slate-700'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${toggle1 ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-4">
                <span className="text-slate-300 text-sm font-medium">모든 정보 안전하게 암호화하기</span>
                <button 
                  onClick={() => setToggle2(!toggle2)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${toggle2 ? 'bg-teal-400' : 'bg-slate-700'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${toggle2 ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-4">
                <span className="text-slate-300 text-sm font-medium">30분 뒤 자동으로 로그아웃하기</span>
                <button 
                  onClick={() => setToggle3(!toggle3)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${toggle3 ? 'bg-teal-400' : 'bg-slate-700'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${toggle3 ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 bg-[#0f172a] hover:bg-slate-800 border border-slate-800 text-white font-bold rounded-2xl transition-colors text-sm">
                비밀번호 바꾸기
              </button>
              <Link href="/login" className="block w-full">
                <button className="w-full py-4 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold rounded-2xl transition-colors text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                  로그아웃
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
