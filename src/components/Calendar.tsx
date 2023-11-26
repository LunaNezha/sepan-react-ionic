import { FA } from "@constants/langs.const";
import { IonDatetime } from "@ionic/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Calendar, CalendarProvider } from "zaman";

const LocalizeCalendar = () => {
  const { i18n } = useTranslation("translations");
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <>
      {i18n.language === FA ? (
        <CalendarProvider locale="fa">
          <Calendar
            defaultValue={calendarValue}
            onChange={(day) => setCalendarValue(new Date(day))}
          />
        </CalendarProvider>
      ) : (
        <IonDatetime presentation="date" />
      )}
    </>
  );
};

export default LocalizeCalendar;
