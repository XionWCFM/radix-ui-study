import ButtonAtom from "@/components/system/atom/button-atom";
import DialogAtom from "@/components/ui/dialog/dialog-atom";
import SliderAtom from "@/components/ui/slider/slider-atom";

export default function Home() {
  return (
    <div className=" text-red-50">
      <DialogAtom
        trigger={<ButtonAtom>흐으음요</ButtonAtom>}
        content={<ButtonAtom>엄준식</ButtonAtom>}
      />
      <SliderAtom />
    </div>
  );
}
