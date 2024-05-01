import { FiHome } from "react-icons/fi";
import { FiClipboard } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Nevbar=() => {
  return(
    <>
      <div className={' fixed bottom-0 w-full flex justify-between bg-white rounded-t-[20px] px-5 py-4'}>
        <div className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
          <FiHome className={'  text-[#9E9FA1] w-[24px] h-[24px]'}/>
          <div className={'text-[#9E9FA1] text-[11px]'}>홈</div>
        </div>
        <div className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
          <FiClipboard className={'text-[#9E9FA1] w-[24px] h-[24px]'}/>
          <div className={'text-[#9E9FA1] text-[11px]'}>메거진</div>
        </div>
        <div className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
          <FiCheckSquare className={'text-[#9E9FA1] w-[24px] h-[24px]'}/>
          <div className={'text-[#9E9FA1] text-[11px]'}>퀴즈</div>
        </div>
        <div className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
          <FiUser className={'text-[#9E9FA1] w-[24px] h-[24px]'}/>
          <div className={'text-[#9E9FA1] text-[10px]'}>마이페이지</div>
        </div>
      </div>
    </>
  )
}

export default Nevbar;