"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import { FaStar } from "react-icons/fa6";
import Rating from "@/app/components/inputs/Rating";

interface ReviewClientProps {
  reservations: Array<SafeReservation> | null | undefined | any;
  currentUser?: SafeUser | null;
}

const ReviewClient: React.FC<ReviewClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      communicationScore: 0,
      accuracyScore: 0,
      publicMessage: "",
      privateMessage: "",
    },
  });

  const communicationScore = watch("communicationScore");
  const accuracyScore = watch("accuracyScore");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // Remove the line below when axios implementation is done
    setIsLoading(false);

    // axios
    //   .post("/api/review", data)
    //   .then(() => {
    //     toast.success("Успешно публикувахте вашият отзив!");
    //     router.refresh();
    //     reset();
    //     setStep(STEPS.COMMUNICATION);
    //     postSitterReviewModal.onClose();
    //   })
    //   .catch((error) => {
    //     if (
    //       error &&
    //       error.response &&
    //       error.response.data &&
    //       error.response.data.message
    //     ) {
    //       toast.error(error.response.data.message);
    //     } else {
    //       toast.error("Нещо се обърка.");
    //     }
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
          lg:pt-24 pt-32 pb-20
        "
      >
        <Heading
          title="Отзив"
          subtitle="Отзивите са от решаващо значение за изграждането на доверие в Petland.bg. Те са важен начин за обратна връзка между гледачите и търсещите такива, помагат на общността ни да взема информирани решения и да разбира какво да очаква, когато се правят планове. Вярваме, че справедливата система за оставяне на отзиви е тази, която уважава и защитава искрените отзиви на нашата общност, и разполагаме с редица предпазни мерки, които помагат за изграждане на доверие в нашата система."
          imageSrc="/images/review page background.png"
        />
        <div
          className="
          mt-10
          grid 
          grid-cols-1
          gap-8
        "
        >
          <div className="flex flex-col gap-8">
            <Heading
              title="Дай оценка на комуникацията ви"
              subtitle="Тук трябва да се поясни какво се означава тази оценка..."
              textSizeClass={"text-sm"}
            />
            <Rating />
          </div>
          <div className="flex flex-col gap-8">
            <Heading
              title="Дай оценка на точността"
              subtitle="Тук трябва да се поясни какво се означава тази оценка..."
              textSizeClass={"text-sm"}
            />
            <Rating />
          </div>
          <div className="flex flex-col gap-8">
            <Heading
              title="Напиши публично ревю/коментар"
              subtitle="Остави публичен коментар относно престоя на твоя домашен любимец при <човека>. Този коментар ще бъде видим за всички."
              textSizeClass={"text-sm"}
            />
            <Input
              id="publicMessage"
              label="Публичен коментар"
              textarea
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="flex flex-col gap-8">
            <Heading
              title="Напиши частен коментар"
              subtitle="Този коментар ще бъде видим само и единствено от <човека>. Този коментар няма да бъде споделен към обявата."
              textSizeClass={"text-sm"}
            />
            <Input
              id="privateMessage"
              label="Частен коментар"
              textarea
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="flex flex-col lg:mx-96 mx-24">
            <Button label="Публикувай отзив" onClick={() => {}} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReviewClient;
