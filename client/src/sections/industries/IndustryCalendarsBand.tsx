import { SiGooglecalendar, SiApple } from "react-icons/si";

export default function IndustryCalendarsBand() {
  return (
    <section className="py-8 sm:py-10 bg-blue-50 border-y border-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <SiGooglecalendar className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-900">Google Calendar</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <SiApple className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-900">Apple Calendar</span>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            Two-way sync keeps your team aligned without double-entry
          </p>
        </div>
      </div>
    </section>
  );
}
