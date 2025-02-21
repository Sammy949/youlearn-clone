import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-3">
      <Select>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="US" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant={"secondary"}>Sign in</Button>
    </nav>
  );
};
export default Navbar;
