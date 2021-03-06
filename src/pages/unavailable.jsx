import Head from "next/head";
import { Container } from "@/components/UI/atoms/container";
import { HeaderLogo } from "@/components/UI/atoms/HeaderLogo";

export const getStaticProps = async () => {
  return {
    props: {
      noWrappers: true,
    },
  };
};

export default function PageNotAvailable() {
  return (
    <main className="bg-white">
      <Head>
        <title>Not Available - Neptune Mutual Covers</title>
        <meta
          name="description"
          content="Get guaranteed payouts from our parametric cover model. Resolve incidents faster without the need for claims assessment."
        />
      </Head>
      <header className="bg-black text-EEEEEE px-8 py-6">
        <HeaderLogo />
      </header>
      <Container className="py-28">
        <img
          src="/unavailable.svg"
          alt="Access Denied"
          className="block w-52 h-52 mx-auto"
        />
        <h2 className="text-h3 leading-10 font-sora font-bold text-center my-6">
          Oops, Neptune Mutual is not available in your region
        </h2>
        <p className="text-9B9B9B text-center mt-2">
          Enter your email and we will notify when Neptune Mutual is available
        </p>
        <form className="mt-6 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="block w-full py-3 pl-4 border border-B0C4DB rounded-lg"
            placeholder="Enter email address"
          />
          <button
            type="submit"
            className="bg-4e7dd9 text-EEEEEE uppercase text-h5 font-sora font-bold mt-6 py-5 px-10 block w-full rounded-lg"
          >
            subscribe
          </button>
        </form>
      </Container>
    </main>
  );
}
