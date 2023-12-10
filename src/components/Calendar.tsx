import { FA } from "@constants/langs.const";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Calendar, CalendarProvider } from "zaman";

const LocalizeCalendar = () => {
  const { i18n } = useTranslation("translations");
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <CalendarProvider
      locale={i18n.language == FA ? "fa" : "en"}
      direction={i18n.language == FA ? "rtl" : "ltr"}
    >
      <Calendar
        className="calendar h-[410px] w-full rounded-xl border-[1px] border-white-950/10 bg-white-50 dark:border-white-200/10 dark:bg-big-stone-950"
        defaultValue={calendarValue}
        onChange={(day) => setCalendarValue(new Date(day))}
      />
    </CalendarProvider>
  );
};

export default LocalizeCalendar;
