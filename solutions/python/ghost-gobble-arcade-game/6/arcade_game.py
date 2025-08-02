def eat_ghost(power_pellet_active, touching_ghost):
    return power_pellet_active is True and touching_ghost is True

def score(touching_power_pellet, touching_dot):
    return touching_power_pellet is True or touching_dot is True

def lose(power_pellet_active, touching_ghost):
    return power_pellet_active is False and touching_ghost is True

def win(has_eaten_all_dots, power_pellet_active, touching_ghost):
    return has_eaten_all_dots is True and lose(power_pellet_active, touching_ghost) is False
