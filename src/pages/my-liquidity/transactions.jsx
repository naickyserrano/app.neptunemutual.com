import { BreadCrumbs } from "@/components/UI/atoms/breadcrumbs";
import { Container } from "@/components/UI/atoms/container";
import { Hero } from "@/components/UI/molecules/Hero";
import { HeroTitle } from "@/components/UI/molecules/HeroTitle";
import { MyLiquidityTxsTable } from "@/components/UI/organisms/my-liquidity/MyLiquidityTxsTable";
import Head from "next/head";

export default function MyLiquidityTxs() {
  return (
    <main>
      <Head>
        <title>Neptune Mutual</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Container className="px-2 py-20">
          <BreadCrumbs
            pages={[
              { name: "My Liquidity", href: "/my-liquidity", current: false },
              {
                name: "Transaction List",
                href: "/my-liquidity/transactions",
                current: true,
              },
            ]}
          />
          <HeroTitle>Transaction List</HeroTitle>
        </Container>
        <hr className="border-b border-B0C4DB" />
      </Hero>

      <Container className="pt-14 pb-28">
        <p className="text-9B9B9B text-xs text-right font-semibold mb-8">
          LAST SYNCED: <span className="pl-1 text-4e7dd9">#265487098</span>
        </p>

        <MyLiquidityTxsTable />
      </Container>
    </main>
  );
}
