import type {FeePreset} from "./index.ts";

let none = {label: 'None', percentage: 0};
export const PLATFORM_PROVIDER_FEE_PRESETS: FeePreset[] = [
    none,
    {label: 'Zalando', percentage: 5},
    {label: 'Avocadostore', percentage: 10},
    {label: 'CompuGlobalHyperMegaNet', percentage: 2.5},
]

export const PAYMENT_PROVIDER_FEE_PRESETS: FeePreset[] = [
    none,
    {label: 'PayPal', percentage: 6},
    {label: 'Klarna', percentage: 8},
    {label: 'Talking Mooses', percentage: 5},
]

export const LOGISTICS_PROVIDER_FEE_PRESETS: FeePreset[] = [
    none,
    {label: 'DHL', percentage: 10},
    {label: 'UPS', percentage: 15},
    {label: 'Clumsy Student Movers', percentage: 5},
]