import { create} from 'zustand'

interface LoginModalstore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useLoginModal = create<LoginModalstore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}))

export default useLoginModal