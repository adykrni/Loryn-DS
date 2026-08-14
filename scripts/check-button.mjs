import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

const contract = JSON.parse(
  readFileSync(join(root, "contracts/button.contract.json"), "utf8")
)

const buttonSource = readFileSync(
  join(root, "src/components/ui/button.tsx"),
  "utf8"
)

const deferredVariants = new Set(["destructive"])

const expectedVariants = contract.props.variant.values.filter(
  (value) => !deferredVariants.has(value)
)
const expectedSizes = contract.props.size.values

const exportedVariantsMatch = buttonSource.match(
  /export const BUTTON_CVA_VARIANTS = \[([\s\S]*?)\] as const/
)
const exportedSizesMatch = buttonSource.match(
  /export const BUTTON_CVA_SIZES = \[([\s\S]*?)\] as const/
)

if (!exportedVariantsMatch || !exportedSizesMatch) {
  console.error("check-button: could not find BUTTON_CVA_VARIANTS / BUTTON_CVA_SIZES exports")
  process.exit(1)
}

function parseExportedArray(block) {
  return [...block.matchAll(/"([^"]+)"/g)].map((match) => match[1])
}

const actualVariants = parseExportedArray(exportedVariantsMatch[1])
const actualSizes = parseExportedArray(exportedSizesMatch[1])

function diff(label, expected, actual) {
  const expectedSet = new Set(expected)
  const actualSet = new Set(actual)
  const missing = expected.filter((value) => !actualSet.has(value))
  const extra = actual.filter((value) => !expectedSet.has(value))

  if (missing.length === 0 && extra.length === 0) {
    console.log(`✓ ${label}: ${actual.join(", ")}`)
    return true
  }

  console.error(`✗ ${label} mismatch`)
  if (missing.length) console.error(`  missing: ${missing.join(", ")}`)
  if (extra.length) console.error(`  extra:   ${extra.join(", ")}`)
  return false
}

let ok = true
ok = diff("variants", expectedVariants, actualVariants) && ok
ok = diff("sizes", expectedSizes, actualSizes) && ok

if (contract.props.variant.default !== "primary") {
  console.error(`✗ variant default must be "primary", got "${contract.props.variant.default}"`)
  ok = false
} else {
  console.log('✓ variant default: primary')
}

if (contract.props.size.default !== "md") {
  console.error(`✗ size default must be "md", got "${contract.props.size.default}"`)
  ok = false
} else {
  console.log('✓ size default: md')
}

if (!ok) {
  process.exit(1)
}

console.log("Button contract check passed.")
