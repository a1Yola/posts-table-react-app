import { useState } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@headlessui/react";
import type { AsyncListData } from "react-stately";

import { createPostFormSchema, postFields } from "./config";
import { FieldFactory } from "./ui";
import { Loader } from "@components/ui";
import { postsApi } from "@/api";
import { composeDefaultValues } from "@/lib";

import type { Post } from "@/shared";
import type { PostFormData } from "./types";

interface AddPostFormProps {
  listApi: AsyncListData<Post>;
  nextPage: number | null;
  close: () => void;
}

export const AddPostForm = ({ listApi, nextPage, close }: AddPostFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = createPostFormSchema(postFields);

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: composeDefaultValues(postFields),
  });

  const onSubmit: SubmitHandler<PostFormData> = async (data) => {
    setIsSubmitting(true);

    postsApi.addPost({
      data,
      onSuccess: (newPost) => {
        if (nextPage === null) listApi.append(newPost);
        methods.reset();
        close();
      },
      onError: () => {
        listApi.reload();
      },
      onFinish: () => setIsSubmitting(false),
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        {postFields.map((field) => (
          <FieldFactory key={field.name} field={field} />
        ))}

        <Button
          type="submit"
          disabled={isSubmitting && listApi.isLoading}
          className="w-full bg-blue text-white text-sm font-bold uppercase px-4 py-2 rounded
              outline-none hover:cursor-pointer hover:bg-blue-500 active:bg-blue-600 focus:outline-none
              ease-linear transition-all duration-150"
        >
          {isSubmitting ? <Loader svgClass="text-white" /> : "Добавить пост"}
        </Button>
      </form>
    </FormProvider>
  );
};
