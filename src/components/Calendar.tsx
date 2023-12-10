import { FA } from "@constants/langs.const";
import { IonDatetime } from "@ionic/react";
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
        defaultValue={calendarValue}
        onChange={(day) => setCalendarValue(new Date(day))}
      />
    </CalendarProvider>
  );
};

export default LocalizeCalendar;
