
import { defineAbility, Ability, AbilityBuilder } from '@casl/ability';

export { Actions, Subjects, Fields };

enum Actions {
  READ = "read",
  CREATE = "create",
  DELETE = "delete",
  UPDATE = "update",
}

enum Subjects {
  SETTINGS = "Settings",
}

enum Fields {
  ALL = "all",
}

function a1() {
  const { can, rules } = new AbilityBuilder<Ability>();
  can(Actions.CREATE, Subjects.SETTINGS);
  return rules;
}

function a2() {
  const { can, rules } = new AbilityBuilder<Ability>();
  can(Actions.UPDATE, Subjects.SETTINGS, { ownerId: 23 });
  return rules;
}

function combined(): Ability {
  const ab1 = a1();
  const ab2 = a2();

  // How to combine ab1 and a2b?
  return new Ability(ab1.concat(ab2));
}
