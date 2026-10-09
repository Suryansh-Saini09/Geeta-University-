import React from "react";
import { FileText, Presentation, FolderCheck, Video, Download, ExternalLink } from "lucide-react";
import { ugcDocuments, ugcApprovalsList } from "@/data/ugcData";


export default function UGCDocumentsGrid({
  docsData,
  approvalsData,
}: {
  docsData?: any;
  approvalsData?: any;
}) {
  const docTitle = docsData?.title || "Official UGC Performa & Inspection Files";
  const documentsList = docsData?.documents || ugcDocuments;
  const approvalsTitle = approvalsData?.title || "Statutory Council Approvals & Accreditations";
  const approvalsList = approvalsData?.approvals || ugcApprovalsList;

  const getDocumentIcon = (name: string) => {
    switch (name) {
      case "Presentation":
        return <Presentation className="h-7 w-7 text-[#E8871A]" />;
      case "FolderCheck":
        return <FolderCheck className="h-7 w-7 text-[#E8871A]" />;
      case "Video":
        return <Video className="h-7 w-7 text-[#E8871A]" />;
      default:
        return <FileText className="h-7 w-7 text-[#E8871A]" />;
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Performa Documents Grid */}
        <div>
          <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
              {docTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {documentsList.map((doc: any, idx: number) => (
              <div
                key={doc.id || idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F7F9FC] p-6 sm:p-8 transition-all duration-300 hover:border-[#E8871A]/50 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
                      {getDocumentIcon(doc.iconName)}
                    </div>
                    <span className="rounded-full bg-[#0A1F44] px-3 py-1 text-xs font-semibold text-white">
                      {doc.fileType}
                    </span>
                  </div>

                  <span className="block text-xs font-mono font-bold text-[#E8871A] mb-1">
                    {doc.filename}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#0A1F44] mb-3 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                    {doc.description}
                  </p>
                </div>

                <div>
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0A1F44] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#E8871A] hover:shadow-lg active:scale-[0.99] font-sans"
                    style={{ color: "#ffffff" }}
                  >
                    {doc.isExternal ? (
                      <>
                        <span className="text-white" style={{ color: "#ffffff" }}>
                          Open Geo-Tagged Media Drive
                        </span>
                        <ExternalLink className="h-4 w-4 shrink-0 text-[#E8871A] group-hover:text-white" />
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 shrink-0 text-[#E8871A] group-hover:text-white" />
                        <span className="text-white" style={{ color: "#ffffff" }}>
                          Download / View PDF File
                        </span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Statutory Approvals Grid */}
        {approvalsList && approvalsList.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
                {approvalsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {approvalsList.map((app: any, idx: number) => (
                <div
                  key={app.id || idx}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 space-y-3 transition-all hover:border-amber-400/50 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-[#E8871A]">
                      {app.badgeText || "Statutory Approval"}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {app.actOrSection}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                    {app.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#07589F]">
                    {app.body}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
