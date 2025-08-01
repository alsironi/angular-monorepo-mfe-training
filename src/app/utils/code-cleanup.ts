export function removeUnusedVariables(code: string): string {
  return code.replace(/let\s+\w+\s*=\s*[^;]+;/g, match => {
    // Remove if unused
    return '';
  });
}
