import { create} from 'zustand'

interface RegisterModelstore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useRegisterModel = create<RegisterModelstore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: true}),
}))

export default useRegisterModel