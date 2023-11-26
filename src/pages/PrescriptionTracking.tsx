import React, { lazy, useEffect } from "react";
import { IonContent, IonText } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons";
import Input from "@components/Inputs";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Breadcrumbs = lazy(() => import("@components/Breadcrumbs"));

const PrescriptionTracking: React.FC = () => {
  const { t } = useTranslation("translations");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = t("titles.prescription_tracking");
  }, []);

  const handleSubmitPTForm = (res: any) => {
    console.log(res);
  };

  return (
    <IonContent fullscreen>
      <div className="flex flex-col gap-5 p-5 pt-3 sm:gap-6 sm:p-6 sm:pt-3 md:gap-8 md:p-8 md:pt-3">
        {/* header */}
        <div className="page-header">
          <Breadcrumbs currentPageTitle={t("titles.prescription_tracking")} />
          <Input
            {...register("globalSearch")}
            type="search"
            icon="fi fi-rr-search"
            name="globalSearch"
            className="basis-2/5"
            BorderRadius={"full"}
            TextSizes={"xs"}
            placeholder={t("inputs.global_search")}
          />
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitPTForm)}
          className="flex flex-wrap items-start gap-4"
        >
          <Input
            {...register("globalSearch")}
            type="text"
            icon="fi fi-rr-search-alt"
            name="idTracking"
            placeholder={t("inputs.id_tracking")}
            className="flex-1"
            errors={errors.idTracking?.message}
          />

          <Button type="submit" variant={"filled-green"} size={"md"}>
            <IonText>{t("buttons.search")}</IonText>
          </Button>
        </form>
      </div>
    </IonContent>
  );
};

export default PrescriptionTracking;
