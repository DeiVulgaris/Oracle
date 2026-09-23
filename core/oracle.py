import random


def flip():
    return random.choices(
        ["YES", "NO", "UNDEFINED"],
        weights=[45, 45, 10],
        k=1,
    )[0]