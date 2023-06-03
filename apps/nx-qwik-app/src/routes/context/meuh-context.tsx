import { createContextId } from "@builder.io/qwik";
import { type Signal } from "@builder.io/qwik";

export const meuhContextId = createContextId<Signal<boolean>>('Meuh');
