"use client";

import { SafeReservation, SafeUser } from "@/app/types";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "@/app/components/Heading";
import { FaThumbsUp } from "react-icons/fa";
import Avatar from "@/app/components/Avatar";
import { PiClockCountdownFill, PiCheckCircleFill } from "react-icons/pi";
import { TiCancel } from "react-icons/ti";
import { format } from "date-fns";
import ManageContainer from "@/app/components/ManageContainer";

interface ReservationRequestsClientProps {
  reservationRequests: SafeReservation[];
}

const ReservationRequests: React.FC<ReservationRequestsClientProps> = ({
  reservationRequests,
}) => {
  const router = useRouter();
  const [approvedId, setApprovedId] = useState("");
  const [cancelledId, setCancelledId] = useState("");

  const onApprove = useCallback(
    (id: string) => {
      setApprovedId(id);

      axios
        .post(`/api/reservations/approve/${id}`, {})
        .then(() => {
          toast.success("Резервацията е одобрена!");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setApprovedId("");
        });
    },
    [router]
  );

  const onCancel = useCallback(
    (id: string) => {
      setCancelledId(id);

      axios
        .post(`/api/reservations/cancel/${id}`, {})
        .then(() => {
          toast.success("Резервацията е отменена!");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setCancelledId("");
        });
    },
    [router]
  );

  const handleReservationDate = (request: SafeReservation) => {
    if (!request) {
      return null;
    }

    const start = new Date(request.startDate);
    const end = new Date(request.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  };

  const awaitingApproval = reservationRequests.filter(
    (request) => request.approved === false
  );

  return (
    <ManageContainer>
      <div className="flex flex-wrap">
        <div className="w-full max-w-full mx-auto">
          <div className="relative flex flex-col break-words min-w-0 bg-clip-border bg-white">
            <div className="relative flex flex-col min-w-0 break-words bg-clip-border rounded-2xl border-stone-200 shadow shadow-lg">
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <Heading
                    title="Резервации"
                    subtitle="Заявки за резервации, одобрени или чакащи одобрение"
                  />
                </h3>
                <div className="relative flex flex-wrap items-center my-2">
                  <span className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light">
                    {awaitingApproval.length} чакащи одобрение
                  </span>
                </div>
              </div>
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[175px]">
                          № на резервацията
                        </th>
                        <th className="pb-3 text-center min-w-[100px]">
                          Заявил
                        </th>
                        <th className="pb-3 pr-12 text-center min-w-[175px]">
                          Статус
                        </th>
                        <th className="pb-3 pr-12 text-center min-w-[100px]">
                          Заявени дати
                        </th>
                        <th className="pb-3 min-w-[50px]"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservationRequests.map((request: SafeReservation) => (
                        <tr
                          key={request.id}
                          className="border-b last:border-b-0"
                        >
                          <td className="p-3 pl-0">
                            <div className="flex items-center">
                              <div className="font-light text-xs">
                                <span className="font-semibold">#</span>
                                {request.id}
                              </div>
                            </div>
                          </td>
                          <td className="p-3 pr-0">
                            <div className="flex items-center gap-2">
                              <Avatar src={request.user.image} />
                              <span className="font-semibold text-xs">
                                {request.user.name}
                              </span>
                            </div>
                          </td>
                          <td className="p-3 pr-12">
                            {request.approved ? (
                              <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                <span className="inline-flex items-center rounded-md bg-emerald-300 px-2 py-1 text-xs font-medium text-emerald-800 ring-1 ring-inset ring-red-600/10">
                                  <PiCheckCircleFill
                                    size={20}
                                    className="mr-1"
                                  />{" "}
                                  Одобрена
                                </span>
                              </span>
                            ) : (
                              <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                  <PiClockCountdownFill
                                    size={20}
                                    className="mr-1"
                                  />{" "}
                                  Чака одобрение
                                </span>
                              </span>
                            )}
                          </td>
                          <td className="pr-0 text-start">
                            <div className="font-semibold text-xs text-neutral-700">
                              {handleReservationDate(request)}
                            </div>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            {request.approved ? (
                              <div
                                onClick={() => onCancel(request.id)}
                                className="flex flex-row gap-2 justify-center items-center rounded-full hover:bg-neutral-100 transition cursor-pointer p-2"
                              >
                                <TiCancel className="fill-rose-700" size={24} />{" "}
                                <span className="font-semibold text-sm">
                                  Отмени
                                </span>
                              </div>
                            ) : (
                              <div
                                onClick={() => onApprove(request.id)}
                                className="flex flex-row gap-2 justify-center items-center rounded-full hover:bg-neutral-100 transition cursor-pointer p-2"
                              >
                                <FaThumbsUp
                                  className="fill-emerald-800"
                                  size={16}
                                />{" "}
                                <span className="font-semibold text-sm">
                                  Одобри
                                </span>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ManageContainer>
  );
};

export default ReservationRequests;
