import type { Or } from "@prisma/client/runtime/library";

export type Replace<OriginalType, ReplacedType> = Omit<OriginalType, keyof ReplacedType> & ReplacedType;