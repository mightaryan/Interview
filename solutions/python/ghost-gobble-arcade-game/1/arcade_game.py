def eat_ghost(power_pellet_active, touching_ghost):
    if(power_pellet_active == True and touching_ghost == True):
        return True
    else:
        return False

def score(touching_power_pellet, touching_dot):
    if(touching_power_pellet == True or touching_dot == True):
        return True
    else:
        return False
def lose(power_pellet_active, touching_ghost):
  return not power_pellet_active and touching_ghost


def win(has_eaten_all_dots, power_pellet_active, touching_ghost):
  return has_eaten_all_dots and not lose(power_pellet_active, touching_ghost)
