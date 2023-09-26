import ButtonAtom from "@/components/system/atom/button-atom";
import DialogAtom from "@/components/ui/dialog/dialog-atom";
import Motion from "@/components/ui/motion/Motion";
import SliderAtom from "@/components/ui/slider/slider-atom";
import ToastDemo from "@/components/ui/toast/ToastDemo";

export default function Home() {
  return (
    <div className=" text-red-50">
      <DialogAtom
        trigger={<ButtonAtom>흐으음요</ButtonAtom>}
        content={<ButtonAtom>엄준식</ButtonAtom>}
      />
      <SliderAtom />
      <ToastDemo />
      <Motion />
    </div>
  );
}
