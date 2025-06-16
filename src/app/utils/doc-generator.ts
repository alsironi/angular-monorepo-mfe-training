export class DocumentationGenerator {
  generate(classes: any[]): string {
    return classes.map(cls => `# ${cls.name}`).join('\n');
  }
}
