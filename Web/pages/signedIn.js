import Head from "next/head";
import Navbar from "../components/Navbar";
import style from "../styles/signedIn.module.css";
import * as RiIcons from "react-icons/ri";
import { useState, useEffect } from "react";
import Image from "next/image";
import empty from "../images/empty.svg";
import Footer from "../components/Footer";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import Wmenu from "../components/Wmenu";
// import ReadMore from "../components/ReadMore";
import { ethers } from "ethers";
import axios from "axios";
import {
  BASE_URL,
  storeUniqueId,
  Subscribed,
  SubscriptionCheck,
} from "../utils/global";
import { useRouter } from "next/router";
import connectContract from "../utils/connectContract";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import ColoredCard from "../components/ColoredCard";
import moment from "moment";
import { toast } from "react-toastify";
import { ReadMore } from "./../components/ReadMore";

function SignedIn() {
  useEffect(() => {
    if (SubscriptionCheck() == true) {
      setIsSubscribed(true);
    }
  }, [SubscriptionCheck]);

  // console.log(data);

  const account = useAccount().address;
  const { disconnect } = useDisconnect();
  // console.log(useAccount())

  const [buyCarbon, setBuyCarbon] = useState(false);
  const [showUsage, setShowUsage] = useState(false);
  // const [cidArray, setCidArray] = useState(null);
  const [devices, setDevices] = useState(null);
  const router = useRouter();
  const [sub, setSub] = useState(false);
  const [iot, setIot] = useState();
  const [deposit, setDeposit] = useState();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [dataGraph, setDataGraph] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [graphAddress, setGraphAddress] = useState(account);

  const openSubcribe = () => {
    setSub(!sub);
  };
  const convertToDate = (num) => {
    let newUnix = moment.unix(num);
    console.log(newUnix.format("llll"));
    return newUnix.format("llll");
  };
  const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/dear-ore/chemotronix",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            registers {
              id
              subStatus
              uniqueID
              registrationTime
            }
          }
        `,
      })
      .then((res) => {
        function check(obb) {
          return obb.id == account.toLowerCase();
        }
        const data = res.data.registers;
        setDataGraph(data.filter(check));
        console.log(data.filter(check), account);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [account]);

  const createEvent = async (uniqueID) => {
    try {
      const chemContract = connectContract();

      if (chemContract) {
        let eventDataCID = uniqueID;

        const txn = await chemContract.subscribe(deposit, eventDataCID, {
          gasLimit: 900000,
        });

        console.log("Minting...", txn.hash);
        console.log("Minted -- ", txn.hash);
        storeUniqueId(uniqueID);
        toast.success("Subscribed");
        Subscribed();
        setIsSubscribed(true);
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      console.log(error, "err");
    }
  };
  async function handleSubscribe(e) {
    e.preventDefault();

    const body = {
      iot: iot,
      deposit: deposit,
    };

    await createEvent(body.iot);
  }

  const toggleBuyCarbon = () => {
    setBuyCarbon(!buyCarbon);
  };
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENBOTRiNERGRkYxZDMzMjYxOUVhZjMxRTBjRTlDNzNCYjI4QzJERTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjIyMTgxMDg5ODksIm5hbWUiOiJUZXN0IDAyIn0.hEHqeerV5xEWU9OLXhZPXup1EaATXJlLVDzAX4fz0CU",
    },
  };
  useEffect(() => {
    carbonData();
  }, []);
  const carbonData = () => {
    axios
      .get(
        `${BASE_URL}/user/uploads?before=2020-07-27T17%3A32%3A28Z&page=1&size=10`,
        config
      )
      .then((response) => {
        console.log(response);
        let arr = [];
        response?.data.map((ob, i) => {
          return arr.push({
            deviceId: ob.name.slice(19),
            dataLink: ob.cid + ".ipfs.w3s.link",
          });
        });
        setDevices([...arr]);
        console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div>
        <Head>
          <title>Chemotronix</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <div className={style.bg}></div>
        <main className="flex justify-center overflow-hiddne">
          <div className="container px-5">
            <Navbar signedIn />

            <div className="mt-24">
              {sub && (
                <div
                  id="authentication-modal"
                  tabIndex="-1"
                  aria-hidden="true"
                  className=" bg-white fixed justify-center items-center flex top-0 h-full right-0 left-0 z-50 w-full h-modal"
                >
                  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/* Modal content  */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        onClick={openSubcribe}
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="authentication-modal"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                      <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                          Subscribe to our platform
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubscribe}>
                          <div>
                            <input
                              type="text"
                              name="ioT"
                              onChange={(e) => setIot(e.target.value)}
                              id="ioT"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="unique IoT"
                              required
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              name="deposit"
                              id="deposit"
                              onChange={(e) => setDeposit(e.target.value)}
                              placeholder="Enter deposit"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* modal */}

              <div className="container flex flex-col overflow-x-hidden lg:flex-row justify-center">
                <div className="lg:w-9/12 flex flex-col md:flex-row overflow-hidden">
                  <div className="w-36 h-36 mb-5 mr-5 md:mb-0 bg-yellow-400 rounded-full justify-center flex">
                    <p className="text-center text-6xl my-auto">I</p>
                  </div>
                  <div className="flex flex-col justify-center ">
                    <p>Welcome,</p>

                    {account ? (
                      <div className="flex ">
                        <Wmenu
                          account={account}
                          disconnect={() => disconnect()}
                        />
                        <div
                          className="bg-[#008036] cursor-pointer ml-4 px-3 py-1 rounded-md text-white"
                          onClick={openSubcribe}
                          disabled={isSubscribed}
                        >
                          {isSubscribed ? "Subscribed" : "Subscribe"}
                        </div>
                      </div>
                    ) : (
                      <ConnectButton />
                    )}

                    <h1 className="text-4xl md:text-6xl font-bold"></h1>
                  </div>
                </div>
                <div className="lg:mt-0 mt-10 w-[40%] lg:w-1/2 lg:flex lg:justify-end items-center">
                  <div className="bg-green-800 h-16 rounded-md cursor-pointer px-12 flex items-center">
                    <p
                      onClick={() => router.push("/usageChart")}
                      className=" text-white"
                    >
                      Usage Chart
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div className="container flex flex-col lg:flex-row justify-center">
                <div className="lg:w-1/2 flex flex-col">
                  <div className="flex"></div>
                  <div className="flex my-5 flex-wrap">
                    <p className=" text-green-800 mr-3 ">Wallet Address :</p>
                    <p className=" text-green-800 font-bold w-[156px] md:w-auto overflow-hidden">
                      {" "}
                      {account}{" "}
                    </p>
                    <span className="md:hidden">...</span>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:flex lg:justify-end items-center">
                  {dataGraph && account && dataGraph[0]?.subStatus == "active" && (
                    <div className=" relative w-auto">
                      <div
                        className="bg-slate-50 border-4 cursor-pointer border-green-200 rounded-lg px-8 py-2 flex  justify-center items-center"
                        onClick={toggleBuyCarbon}
                      >
                        <p className="mr-4">Buy carbon credit</p>
                        <RiIcons.RiArrowDropDownLine className="text-6xl" />
                      </div>
                      {buyCarbon && (
                        <div className="absolute top-[90px] w-full">
                          <div className="bg-slate-50 w-full border-2 cursor-pointer py-6 border-slate-50 border-t-green-800">
                            <ul className="flex flex-col w-full justify-center items-center">
                              <Link href={"/sendToken"}>
                                <li className=" py-3 hover:bg-slate-300 w-full text-center">
                                  Send Token
                                </li>
                              </Link>
                              <Link href={"/buyToken"}>
                                <li className=" py-3 hover:bg-slate-300 w-full text-center">
                                  Buy carbon credit
                                </li>
                              </Link>
                              <Link href={"/offsetCarbon"}>
                                <li className=" py-3 hover:bg-slate-300 w-full text-center">
                                  Offset carbon
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 md:flex flex-col hidden  justify-between">
              <div className="bg-green-200 mt-4 h-fit md:h-32 mb-32 md:mb-0 rounded-xl flex flex-col md:flex-row pl-7  justify-around md:items-center">
                <p className=" text-green-800 mb-7 md:mb-0 min-h-[60px]">
                  Registration Time
                </p>
                <p className=" text-green-800 mb-7 md:mb-0 min-h-[60px]">
                  Subscription Status
                </p>
                <p className=" text-green-800 mb-7 md:mb-0 min-h-[60px]">
                  Unique ID
                </p>
              </div>
              {dataGraph !== null && (
                <div className="mt-10 md:ml-7 ml-2">
                  <div className="bg-white mt-4 h-32 rounded-xl flex flex-col md:flex-row  justify-around md:items-center">
                    <p className=" text-green-800 mb-7 md:mb-0 ">
                      <div className="p-4 shadow  flex text-sm items-center justify-center rounded  min-h-[60px] bg-yellow-500 text-white ">
                        {convertToDate(dataGraph[0]?.registrationTime)}
                      </div>
                    </p>

                    <p className=" text-green-800 mb-7 md:mb-0">
                      <div className="p-4 shadow  flex text-sm items-center justify-center rounded  min-h-[60px] bg-yellow-500 text-white ">
                        {dataGraph[0]?.subStatus}
                      </div>
                    </p>

                    <p className=" text-green-800 mb-7 md:mb-0">
                      <div className="p-4 shadow  flex text-sm items-center justify-center rounded md:max-w-[200px] min-h-[60px] bg-yellow-500 text-white break-all">
                        <span className=" ">
                          {dataGraph[dataGraph.length - 1]?.uniqueID}
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-20">
                {dataGraph == null && (
                  <div className=" h-auto border-dashed rounded-lg border-2 px-3 border-slate-300">
                    <div className=" flex  flex-col w-100 items-center justify-around ">
                      <Image src={empty} height={450} width={450} />
                      <p className=" font-extrabold text-slate-500 mt-[-30px] md:mt-[-50px] pb-16">
                        No data!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {dataGraph !== null && (
              <>
                <div className="grid md:hidden grid-cols-4 gap-3 mt-10 bg-white p-2 rounded">
                  <p className=" text-green-800 mb-7 md:mb-0 min-h-[60px] col-span-2">
                    Registration Time
                  </p>
                  <p className=" text-green-800 mb-7 md:mb-0  col-span-2">
                    <div className="p-4 shadow  flex text-sm items-center justify-center rounded  min-h-[60px] bg-yellow-500 text-white ">
                      {convertToDate(dataGraph[0]?.registrationTime)}
                    </div>
                  </p>
                  <p className=" text-green-800 mb-7 md:mb-0 min-h-[60px] col-span-2">
                    Subscription Status
                  </p>
                  <p className=" text-green-800 mb-7 md:mb-0 col-span-2">
                    <div className="p-4 shadow  flex text-sm items-center justify-center rounded  min-h-[60px] bg-yellow-500 text-white ">
                      {dataGraph[0]?.subStatus}
                    </div>
                  </p>
                  <p className=" text-green-800 mb-7 md:mb-0 min-h-[60px] col-span-2">
                    Unique ID
                  </p>
                  <p className=" text-green-800 mb-7 md:mb-0 col-span-2">
                    <div className="p-4 shadow  flex text-sm items-center justify-center rounded md:max-w-[200px] min-h-[60px] bg-yellow-500 text-white break-all">
                      <span className=" ">
                        <ReadMore>
                          {dataGraph[dataGraph.length - 1]?.uniqueID}
                        </ReadMore>
                      </span>
                    </div>
                  </p>
                </div>
              </>
            )}
            <div className="mt-20">
              {dataGraph == null && (
                <div className=" h-auto border-dashed rounded-lg border-2 px-3 border-slate-300">
                  <div className=" flex  flex-col w-100 items-center justify-around ">
                    <Image src={empty} height={450} width={450} />
                    <p className=" font-extrabold text-slate-500 mt-[-30px] md:mt-[-50px] pb-16">
                      No data!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <div className="flex flex-col items-center relative">
          <div className="container">
            <Footer></Footer>
          </div>
          <div className="bg-[#E9F4FB] h-24 w-full bottom-0 absolute z-[-1]"></div>
        </div>
      </div>
    )
  );
}

export default SignedIn;

// export async function getStaticProps() {
//   // const client = new ApolloClient({
//   //   uri: 'https://www.graphqlbin.com/v2/new',
//   //   cache: new InMemoryCache()
//   // })

//   // const {data} = await client.query({
//   //   query: gql `
//   //     query GetLaunches {
//   //       launchesPast(limit: 10) {
//   //         mission_name
//   //         launch_date_local
//   //         launch_site {
//   //           site_name_long
//   //         }
//   //         links {
//   //           article_link
//   //           video_link
//   //         }
//   //         rocket {
//   //           rocket_name
//   //         }
//   //       }
//   //     }
//   //   `
//   // })

//   // const client = new ApolloClient({
//   //   uri: "https://api.thegraph.com/subgraphs/name/dear-ore/chemotronix",
//   //   cache: new InMemoryCache(),
//   // });

//   // const { data } = await client.query({
//   //   query: gql`
//   //      query registers[] {
//   //       id
//   //       subStatus
//   //       uniqueID
//   //     }
//   //   `,
//   // });

//   // console.log(data)

//   // return {
//   //   props: {
//   //     data: data,
//   //   },
//   // };
// }