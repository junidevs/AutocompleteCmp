interface SortOptions {
  caseSensitive: boolean;
  ascending: boolean;
}

const alphabeticallySortByField = <
  T extends Partial<Record<K, any>>,
  K extends string,
>(
    array: T[],
    fields: K[],
    { caseSensitive = false, ascending = true }: SortOptions = {
      caseSensitive: false,
      ascending: true
    }
  ): T[] => {
  return [...array].sort((a: T, b: T) => {
    let keyA = ""
    let keyB = ""

    // Find the first defined field value in the list of fields for each item
    for (const field of fields) {
      if (a[field] !== undefined && keyA === "") {
        keyA = String(a[field])
      }
      if (b[field] !== undefined && keyB === "") {
        keyB = String(b[field])
      }
    }

    // Adjust for case sensitivity based on options
    const valA = caseSensitive ? keyA : keyA.toLowerCase()
    const valB = caseSensitive ? keyB : keyB.toLowerCase()

    // Use localeCompare for the comparison, which supports case sensitivity and locale-specific sorting
    const comparison = valA.localeCompare(valB, undefined, {
      sensitivity: caseSensitive ? "variant" : "base"
    })

    // Adjust the comparison result based on the specified sort direction
    return comparison !== 0 ? (ascending ? comparison : -comparison) : 0
  })
}
export default alphabeticallySortByField
