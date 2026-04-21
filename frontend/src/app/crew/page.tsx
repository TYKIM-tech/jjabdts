"use client";

import Link from "next/link";
import { useState } from "react";

export default function CrewListPage() {
  const [activeFilter, setActiveFilter] = useState("전체 선원");

  const filters = [
    { name: "전체 선원", count: 26, icon: "👥" },
    { name: "응급 환자", count: 2, icon: "⚠️" },
    { name: "항해부", count: 11, icon: "⚓" },
    { name: "기관부", count: 10, icon: "⚙️" },
    { name: "조리/지원", count: 5, icon: "☕" }
  ];

  const crewList = [
    { id: "S26-001", name: "이선장", dept: "항해부", pos: "선장", age: 52, blood: "O+", disease: ["고혈압"], allergy: [], phone: "010-1234-5678 (배우자)" },
    { id: "S26-002", name: "김항해", dept: "항해부", pos: "1등 항해사", age: 45, blood: "A+", disease: [], allergy: ["페니실린"], phone: "010-9876-5432 (부친)" },
    { id: "S26-003", name: "박기관", dept: "기관부", pos: "기관장", age: 55, blood: "B+", disease: ["고혈압", "고지혈증"], allergy: ["아스피린"], phone: "010-3344-5566 (배우자)" },
    { id: "S26-004", name: "최갑판", dept: "항해부", pos: "갑판장", age: 41, blood: "AB+", disease: ["허리디스크"], allergy: [], phone: "010-1122-3344 (배우자)" },
    { id: "S26-005", name: "정조타", dept: "항해부", pos: "조타수", age: 38, blood: "B+", disease: [], allergy: [], phone: "010-5566-7788 (동생)" }
  ];

  return (
    <div className="flex-1 w-full p-4 lg:p-8 flex flex-col bg-[#020617] min-h-0 overflow-y-auto">
      
      <div className="w-full max-w-7xl mx-auto space-y-6 pb-12">
        
        {/* Header */}
        <div className="flex justify-between items-end border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              선원 통합 관리 시스템
            </h1>
            <p className="text-slate-500 text-sm mt-1">MV KOREA STAR 소속 선원 명부 (총 26명 관리 중)</p>
          </div>
          <Link href="/crew/new">
            <button className="bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(45,212,191,0.3)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              신규 선원 등록
            </button>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 custom-scrollbar">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.name;
              return (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-colors ${
                    isActive 
                      ? "bg-teal-500/10 border border-teal-500/30 text-teal-400" 
                      : "bg-[#0b1120] border border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="opacity-80 text-xs">{filter.icon}</span>
                  {filter.name}
                  <span className={`px-2 py-0.5 rounded text-[10px] ${isActive ? 'bg-teal-500/20 text-teal-400' : 'bg-slate-800 text-slate-500'}`}>
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input type="text" placeholder="선원 이름, 고유 ID, 담당 직책으로 검색..." className="w-full bg-[#0b1120] border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-slate-300 text-sm focus:outline-none focus:border-teal-500/50" />
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 text-slate-500 text-xs font-bold border-b border-slate-800 pb-3">
          <div className="col-span-2">선원 프로필</div>
          <div className="col-span-2">소속 및 직급</div>
          <div className="col-span-2">신체 정보</div>
          <div className="col-span-2">기저질환</div>
          <div className="col-span-1">알레르기</div>
          <div className="col-span-2">긴급 연락망</div>
          <div className="col-span-1 text-center">응급 환자 등록</div>
        </div>

        {/* Crew List Items */}
        <div className="space-y-3">
          {crewList.map((crew) => (
            <div key={crew.id} className="grid grid-cols-12 gap-4 items-center bg-[#0b1120] border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-colors">
              
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-800 rounded-full border border-slate-700 shrink-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <p className="text-white font-bold">{crew.name}</p>
                  <p className="text-teal-500 bg-teal-500/10 px-1.5 py-0.5 rounded text-[10px] font-bold mt-0.5 inline-block">{crew.id}</p>
                </div>
              </div>

              <div className="col-span-2 flex items-center gap-2">
                <span className="text-cyan-400 text-sm">⚓</span>
                <span className="text-slate-300 text-sm">{crew.dept}</span>
                <span className="text-slate-600 text-xs">/</span>
                <span className="text-white font-bold text-sm">{crew.pos}</span>
              </div>

              <div className="col-span-2 flex items-center gap-4">
                <div>
                  <p className="text-slate-500 text-[10px]">나이</p>
                  <p className="text-white font-bold">{crew.age}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px]">혈액형</p>
                  <p className="text-rose-400 font-bold">{crew.blood}</p>
                </div>
              </div>

              <div className="col-span-2 flex items-center flex-wrap gap-1">
                {crew.disease.map(d => (
                  <span key={d} className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs rounded-md font-medium">{d}</span>
                ))}
              </div>

              <div className="col-span-1 flex items-center flex-wrap gap-1">
                {crew.allergy.map(a => (
                  <span key={a} className="px-2 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-md font-medium">{a}</span>
                ))}
              </div>

              <div className="col-span-2 flex items-center gap-2 text-slate-300 text-sm">
                <svg className="w-3.5 h-3.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {crew.phone}
              </div>

              <div className="col-span-1 flex justify-center">
                <Link href="/chart">
                  <button className="bg-[#0f172a] hover:bg-slate-800 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-2 rounded-xl transition-colors flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    응급 환자 등록
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
