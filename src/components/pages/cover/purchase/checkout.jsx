import Link from "next/link";

import { Container } from "@/components/UI/atoms/container";
import { Grid } from "@/components/UI/atoms/grid";
import { CoverActionCard } from "@/components/UI/organisms/cover/action-card";
import { actions as coverActions } from "@/src/config/cover/actions";
import { OutlinedCard } from "@/components/UI/molecules/outlined-card";
import { useState } from "react";
import { AcceptRulesForm } from "@/components/UI/organisms/accept-rules-form";
import { useCoverInfo } from "@/components/pages/cover/useCoverInfo";
import { CoverHero } from "@/components/UI/organisms/cover/hero";
import { CoverForm } from "@/components/UI/organisms/cover-form";

export const CoverPurchaseCheckoutPage = () => {
  const { coverInfo } = useCoverInfo();

  if (!coverInfo) {
    return <>loading...</>;
  }

  const imgSrc = "/covers/clearpool.png";
  const title = coverInfo.coverName;

  return (
    <div>
      <main className="bg-F1F3F6">
        {/* hero */}
        <CoverHero coverInfo={coverInfo} title={title} imgSrc={imgSrc} />

        {/* Content */}
        <div className="pt-12 pb-24 border-t border-t-B0C4DB">
          <Container className="grid gap-32 grid-cols-3">
            <div className="col-span-2">
              {/* Description */}
              <p>{coverInfo.about}</p>

              {/* Read more */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:underline mt-4"
              >
                See More
              </a>

              <br className="mt-20" />

              <div className="mt-12">
                <CoverForm />
              </div>
            </div>

            <div className="">
              <OutlinedCard className="bg-DEEAF6 p-10">
                <h3 className="text-h4 font-sora font-semibold">
                  Resolution Sources
                </h3>
                <p className="text-sm mt-1 mb-6 opacity-50">
                  7 days reporting period
                </p>

                <Link href="#">
                  <a className="block text-4E7DD9 hover:underline mt-3">
                    Uniswap Knowledgebase
                  </a>
                </Link>

                <Link href="#">
                  <a className="block text-4E7DD9 hover:underline mt-3">
                    Uniswap Twitter
                  </a>
                </Link>

                <hr className="mt-4 mb-6 border-t border-B0C4DB/60" />

                <div className="flex justify-between">
                  <span className="">Available Liquidity:</span>
                  <strong className="text-right font-bold">$ 750k</strong>
                </div>
              </OutlinedCard>
            </div>
          </Container>
        </div>

        {/* Cover Actions */}
        <div className="pt-20 pb-36 bg-F1F3F6 border-t border-t-B0C4DB">
          <Container>
            <h1 className="text-h2 font-sora font-bold mb-12 text-center">
              Didn&#x2019;t Find What You Were Looking For?
            </h1>
            <Grid>
              {Object.keys(coverActions)
                .filter((x) => x !== "purchase")
                .map((actionKey, i) => {
                  return (
                    <Link key={i} href={`/cover/cover_id/${actionKey}`}>
                      <a className="rounded-4xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black focus:outline-none">
                        <CoverActionCard
                          title={coverActions[actionKey].title}
                          description={coverActions[actionKey].description}
                          imgSrc={`/cover-actions/${actionKey}.png`}
                        ></CoverActionCard>
                      </a>
                    </Link>
                  );
                })}
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
};
