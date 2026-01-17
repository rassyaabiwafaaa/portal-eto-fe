import { APP_MENUS } from "@/app/constant/menu";
import { notFound } from "next/navigation";

type AppKey = keyof typeof APP_MENUS;

function isValidApp(app: string): app is AppKey {
  return app in APP_MENUS;
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ app: string; feature: string }>;
}) {
  const { app: appKey, feature } = await params;

  if (!isValidApp(appKey)) {
    notFound();
  }

  const app = APP_MENUS[appKey];
  const featureData = app.features.find(
    (f) => f.key === feature
  );

  if (!featureData) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">
        {app.label} – {featureData.label}
      </h1>
      <p className="text-gray-500 mt-2">
        Operational feature for {app.label}.
      </p>
    </div>
  );
}
