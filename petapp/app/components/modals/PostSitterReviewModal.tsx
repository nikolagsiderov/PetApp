"use client";

import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import usePostSitterReviewModal from "@/app/hooks/usePostSitterReviewModal";

enum STEPS {
  COMMUNICATION = 0,
  ACCURACY = 1,
  PUBLIC = 2,
  PRIVATE = 3,
}

const PostSitterReviewModal = () => {
  const router = useRouter();
  const postSitterReviewModal = usePostSitterReviewModal();

  const [step, setStep] = useState(STEPS.COMMUNICATION);
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

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRIVATE) {
      return onNext();
    }

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

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRIVATE) {
      return "Публикувай отзив";
    }

    return "Продължи";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.COMMUNICATION) {
      return undefined;
    }

    return "Назад";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Дай оценка на комуникацията ви"
        subtitle="Тук трябва да се напише още нещо"
      />
      {/* Add rating input with stars for communication here... */}
    </div>
  );

  if (step === STEPS.ACCURACY) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Дай оценкак на точността"
          subtitle="Тук трябва да се измисли пак..."
        />
        {/* Add rating input with stars for accuracy here... */}
      </div>
    );
  }

  if (step === STEPS.PUBLIC) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Напиши публично ревю/коментар"
          subtitle="Остави публичен коментар относно престоя на твоя домашен любимец при <човека>. Този коментар ще бъде видим за всички."
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
    );
  }

  if (step === STEPS.PRIVATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Напиши частен коментар"
          subtitle="Този коментар ще бъде видим само и единствено от <човека>. Този коментар няма да бъде споделен към обявата."
        />
        <Input
          id="privateMessage"
          label="Публичен коментар"
          textarea
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      title="Публикувай отзив"
      isOpen={postSitterReviewModal.isOpen}
      onClose={postSitterReviewModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.COMMUNICATION ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default PostSitterReviewModal;
