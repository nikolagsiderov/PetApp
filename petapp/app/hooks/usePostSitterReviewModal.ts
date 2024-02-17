import { create } from "zustand";

interface PostSitterReviewModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePostSitterReviewModal = create<PostSitterReviewModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePostSitterReviewModal;
