import React from 'react';
import Link from 'next/link';
import { Shield, Phone, FileText, AlertTriangle, ExternalLink, Mail, Users } from 'lucide-react';

export const metadata = {
  title: 'Anti-Ragging Committee | Geeta University',
  description: 'National Ragging Prevention Programme at Geeta University. View contact details, helplines, and policies against ragging.',
};

export default function AntiRaggingPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
          <Shield className="w-10 h-10 text-[#0c2d4e]" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A1F44] font-bold mb-6 tracking-tight">
          Anti-Ragging <span className="text-[#E8871A]">Committee</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          Geeta University is committed to providing a safe, secure, and ragging-free environment for all students. We strictly adhere to the National Ragging Prevention Programme.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Quick Action Buttons */}
        <section className="grid sm:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
          <a 
            href="https://geetauniversity.edu.in/uploads/all/388/Anti-Ragging-Poster.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#0c2d4e] hover:bg-[#0A1F44] text-white p-6 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center gap-4 border border-blue-900/50"
          >
            <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition-colors">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-xl">Anti Ragging Poster</h3>
              <p className="text-sm text-blue-200 mt-1">View official guidelines and posters</p>
            </div>
            <ExternalLink className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          <a 
            href="https://geetauniversity.edu.in/uploads/all/2073/Notification-Anti-Ragging-Committee.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-[#E8871A] to-[#F5A623] text-white p-6 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center gap-4 border border-orange-500/50"
          >
            <div className="bg-white/20 p-4 rounded-xl group-hover:bg-white/30 transition-colors">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-xl">Anti Ragging Committee</h3>
              <p className="text-sm text-orange-50 mt-1">View committee members & notification</p>
            </div>
            <ExternalLink className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </section>

        {/* Main Content Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Helpline Info */}
          <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 sm:p-10 border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Phone className="w-32 h-32 text-[#0c2d4e]" />
            </div>
            
            <h2 className="font-serif text-2xl text-[#0c2d4e] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#E8871A] rounded-full"></span>
              National Helpline
            </h2>

            <div className="space-y-8 relative z-10">
              <div className="space-y-3">
                <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">24×7 Toll Free Number</p>
                <p className="font-bold text-4xl text-[#E8871A] tracking-tight">1800-180-5522</p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <a href="mailto:helpline@antiragging.in" className="flex items-center gap-4 text-slate-600 hover:text-[#0c2d4e] transition-colors group/link">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover/link:bg-blue-50 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-lg">helpline@antiragging.in</span>
                </a>
                <a href="http://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-[#0c2d4e] transition-colors group/link">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover/link:bg-blue-50 transition-colors">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-lg">www.antiragging.in</span>
                </a>
              </div>
            </div>
          </section>

          {/* UGC Monitoring Agency */}
          <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 sm:p-10 border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Shield className="w-32 h-32 text-[#0c2d4e]" />
            </div>
            
            <h2 className="font-serif text-2xl text-[#0c2d4e] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#E8871A] rounded-full"></span>
              UGC Monitoring Agency
            </h2>

            <div className="space-y-8 relative z-10">
              <div className="space-y-3">
                <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Agency Name</p>
                <p className="font-bold text-2xl text-[#0A1F44]">Centre for Youth (C4Y)</p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <a href="mailto:antiragging@c4yindia.org" className="flex items-center gap-4 text-slate-600 hover:text-[#0c2d4e] transition-colors group/link">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover/link:bg-blue-50 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-lg">antiragging@c4yindia.org</span>
                </a>
                <a href="http://www.c4yindia.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-[#0c2d4e] transition-colors group/link">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover/link:bg-blue-50 transition-colors">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-lg">www.c4yindia.org</span>
                </a>
                <a href="http://www.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-[#0c2d4e] transition-colors group/link">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover/link:bg-blue-50 transition-colors">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-lg">www.ugc.ac.in</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Warning Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 sm:p-12 border border-red-100 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -top-10 -right-10 p-8 opacity-10 transform rotate-12">
            <AlertTriangle className="w-64 h-64 text-red-500" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-100 text-red-700 font-bold rounded-full mb-8 shadow-sm">
              <AlertTriangle className="w-5 h-5" />
              CRIMINAL OFFENCE
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-red-950 font-bold mb-6 leading-tight">
              RAGGING IS A CRIMINAL OFFENCE AND THE CULPRITS WILL ATTRACT PUNITIVE ACTION AS MENTIONED IN THE UGC REGULATIONS
            </h2>
            
            <div className="mt-10 pt-8 border-t border-red-200/60">
              <p className="text-red-900 font-semibold mb-4 text-lg">View Full Regulations:</p>
              <a 
                href="https://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-red-700 hover:text-white bg-white hover:bg-red-600 px-6 py-4 rounded-xl transition-all shadow-sm hover:shadow-md font-bold text-lg group"
              >
                <FileText className="w-5 h-5 group-hover:text-white text-red-500" />
                Annexure-I Document
                <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Nodal Officers Info */}
        <section className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm text-center hover:border-blue-100 transition-colors">
           <h3 className="font-serif text-2xl font-bold text-[#0A1F44] mb-4">Contact Details of the Nodal Officers</h3>
           <p className="text-slate-600 text-lg">Anti-Ragging Committee (ARC) | Anti-Ragging Squad (ARS)</p>
        </section>

      </div>
    </div>
  );
}
