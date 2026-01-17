import { notFound } from "next/navigation";
import { FEATURE_DISPATCHER } from "../../components/featureDispatcher";
import type { ComponentType } from "react";

type FeatureComponentMap = Record<
  string,
  Record<string, ComponentType>
>;

const DISPATCHER =
  FEATURE_DISPATCHER as unknown as FeatureComponentMap;

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ app: string; feature: string }>;
}) {
  const { app, feature } = await params;

  const FeatureComponent = DISPATCHER[app]?.[feature];

  if (!FeatureComponent) {
    notFound();
  }

  return <FeatureComponent />;
}
