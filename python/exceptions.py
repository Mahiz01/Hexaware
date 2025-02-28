def exception():
    try:
        n = int(input())
        d = int(input())

        r = n/d

        print(f"answer is {r}")

    except ValueError :
        print("Enter Numeric ")

    except ZeroDivisionError:
        print("0 cant be denominator")
    except exception as e:
        print("error as ",e)
exception()