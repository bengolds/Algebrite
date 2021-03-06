# self test functions

test_low_level = ->
	run("clear"); # to initialize stack and memory

	test_inv()
	test_printlatex()
	test_inner()
	test_transpose()
	test_signs_in_rationals()
	test_madd()
	test_msub()
	test_mmul()
	test_mdiv()
	test_mmod()
	test_mprime()
	test_mgcd()
	test_mpow()
	test_mroot()
	test_assignments()
	# commenting out because it takes a looong time
	# with the current logging. But it works now
	# as I'm commenting it out.
	#test_quickfactor()

selftest  = ->
	test_low_level()
	test_sum()
	test_product()
	test_exp()
	test_expand()
	test_factorpoly()
	test_subst()
	test_simplify()

	test_multiply()
	test_scan()
	test_power()
	test_factor_number(); # long
	test_test()
	test_tensor()
	test_bake()
	test_abs()
	test_adj()
	test_arg()
	test_besselj()
	test_bessely()
	test_ceiling()
	test_choose()
	test_circexp()
	test_clock()
	test_cofactor()
	test_condense()
	test_contract()
	test_defint(); # very long
	test_denominator()
	test_derivative()
	test_dirac()
	test_erf()
	test_erfc()
	test_expcos()
	test_expsin()
	test_float()
	test_floor()
	test_gamma()
	test_gcd()
	test_imag()
	test_lcm()
	test_log()
	test_mag()
	test_mod()
	test_nroots()
	test_numerator()
	test_outer()
	test_polar()
	test_quotient()
	test_rationalize()
	test_real()
	test_rect()
	test_sgn()
	test_taylor()
	test_zero()
	test_hermite()
	test_laguerre()
	test_legendre()
	test_binomial()
	test_divisors()
	test_coeff()
	test_sin()
	test_cos()
	test_tan()
	test_sinh()
	test_cosh()
	test_tanh()
	test_arcsin()
	test_arcsinh()
	test_arccos()
	test_arccosh()
	test_arctan()
	test_arctanh()
	test_index()
	test_isprime()
	test_eigen()
	test_shape()
	mini_test()
	test_roots()
	test_integral()


	# alert "passed tests: " + ok_tests + " / failed tests: " + ko_tests
	return


selftest()
