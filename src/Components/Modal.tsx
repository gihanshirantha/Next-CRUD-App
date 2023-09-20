

interface ModalProps{
    modalOpen:boolean;
    setModalOpen:(open:boolean)=>void;
}

const Modal:React.FC<ModalProps> = ({modalOpen,setModalOpen}) => {
  return (
    <div>
        <div className={`modal ${modalOpen?"modal-open":""}`}>
        <div className="modal-box relative">
        <button onClick={()=> setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
    </div>
    </div>
  )
}

export default Modal