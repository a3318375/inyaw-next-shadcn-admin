import { Label } from "@/components/ui/base/label"
import { Switch } from "@/components/ui/base/switch"

export function FormSwitch() {
    return (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
        </div>
    )
}
