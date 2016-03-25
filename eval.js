// Generated by CoffeeScript 1.10.0
var Eval, Eval_Eval, Eval_binding, Eval_check, Eval_cons, Eval_det, Eval_dim, Eval_divisors, Eval_do, Eval_dsolve, Eval_exp, Eval_factorial, Eval_factorpoly, Eval_hermite, Eval_hilbert, Eval_index, Eval_inv, Eval_invg, Eval_isinteger, Eval_multiply, Eval_noexpand, Eval_number, Eval_operator, Eval_predicate, Eval_print, Eval_quote, Eval_rank, Eval_setq, Eval_sqrt, Eval_stop, Eval_subst, Eval_sym, Eval_unit, setq_indexed;

Eval = function() {
  var p1;
  check_esc_flag();
  save();
  p1 = pop();
  switch (p1.k) {
    case CONS:
      Eval_cons();
      break;
    case NUM:
      push(p1);
      break;
    case DOUBLE:
      push(p1);
      break;
    case STR:
      push(p1);
      break;
    case TENSOR:
      Eval_tensor();
      break;
    case SYM:
      Eval_sym();
      break;
    default:
      stop("atom?");
  }
  return restore();
};

Eval_sym = function() {
  var p2;
  if (iskeyword(p1)) {
    push(p1);
    push(symbol(LAST));
    list(2);
    Eval();
    return;
  }
  p2 = get_binding(p1);
  push(p2);
  if (p1 !== p2) {
    return Eval();
  }
};

Eval_cons = function() {
  if (!issymbol(car(p1))) {
    stop("cons?");
  }
  switch (symnum(car(p1))) {
    case ABS:
      return Eval_abs();
    case ADD:
      return Eval_add();
    case ADJ:
      return Eval_adj();
    case AND:
      return Eval_and();
    case ARCCOS:
      return Eval_arccos();
    case ARCCOSH:
      return Eval_arccosh();
    case ARCSIN:
      return Eval_arcsin();
    case ARCSINH:
      return Eval_arcsinh();
    case ARCTAN:
      return Eval_arctan();
    case ARCTANH:
      return Eval_arctanh();
    case ARG:
      return Eval_arg();
    case ATOMIZE:
      return Eval_atomize();
    case BESSELJ:
      return Eval_besselj();
    case BESSELY:
      return Eval_bessely();
    case BINDING:
      return Eval_binding();
    case BINOMIAL:
      return Eval_binomial();
    case CEILING:
      return Eval_ceiling();
    case CHECK:
      return Eval_check();
    case CHOOSE:
      return Eval_choose();
    case CIRCEXP:
      return Eval_circexp();
    case CLEAR:
      return Eval_clear();
    case CLOCK:
      return Eval_clock();
    case COEFF:
      return Eval_coeff();
    case COFACTOR:
      return Eval_cofactor();
    case CONDENSE:
      return Eval_condense();
    case CONJ:
      return Eval_conj();
    case CONTRACT:
      return Eval_contract();
    case COS:
      return Eval_cos();
    case COSH:
      return Eval_cosh();
    case DECOMP:
      return Eval_decomp();
    case DEGREE:
      return Eval_degree();
    case DEFINT:
      return Eval_defint();
    case DENOMINATOR:
      return Eval_denominator();
    case DERIVATIVE:
      return Eval_derivative();
    case DET:
      return Eval_det();
    case DIM:
      return Eval_dim();
    case DIRAC:
      return Eval_dirac();
    case DISPLAY:
      return Eval_display();
    case DIVISORS:
      return Eval_divisors();
    case DO:
      return Eval_do();
    case DOT:
      return Eval_inner();
    case DRAW:
      return Eval_draw();
    case DSOLVE:
      return Eval_dsolve();
    case EIGEN:
      return Eval_eigen();
    case EIGENVAL:
      return Eval_eigenval();
    case EIGENVEC:
      return Eval_eigenvec();
    case ERF:
      return Eval_erf();
    case ERFC:
      return Eval_erfc();
    case EVAL:
      return Eval_Eval();
    case EXP:
      return Eval_exp();
    case EXPAND:
      return Eval_expand();
    case EXPCOS:
      return Eval_expcos();
    case EXPSIN:
      return Eval_expsin();
    case FACTOR:
      return Eval_factor();
    case FACTORIAL:
      return Eval_factorial();
    case FACTORPOLY:
      return Eval_factorpoly();
    case FILTER:
      return Eval_filter();
    case FLOATF:
      return Eval_float();
    case FLOOR:
      return Eval_floor();
    case FOR:
      return Eval_for();
    case GAMMA:
      return Eval_gamma();
    case GCD:
      return Eval_gcd();
    case HERMITE:
      return Eval_hermite();
    case HILBERT:
      return Eval_hilbert();
    case IMAG:
      return Eval_imag();
    case INDEX:
      return Eval_index();
    case INNER:
      return Eval_inner();
    case INTEGRAL:
      return Eval_integral();
    case INV:
      return Eval_inv();
    case INVG:
      return Eval_invg();
    case ISINTEGER:
      return Eval_isinteger();
    case ISPRIME:
      return Eval_isprime();
    case LAGUERRE:
      return Eval_laguerre();
    case LCM:
      return Eval_lcm();
    case LEADING:
      return Eval_leading();
    case LEGENDRE:
      return Eval_legendre();
    case LOG:
      return Eval_log();
    case MAG:
      return Eval_mag();
    case MOD:
      return Eval_mod();
    case MULTIPLY:
      return Eval_multiply();
    case NOT:
      return Eval_not();
    case NROOTS:
      return Eval_nroots();
    case NUMBER:
      return Eval_number();
    case NUMERATOR:
      return Eval_numerator();
    case OPERATOR:
      return Eval_operator();
    case OR:
      return Eval_or();
    case OUTER:
      return Eval_outer();
    case POLAR:
      return Eval_polar();
    case POWER:
      return Eval_power();
    case PRIME:
      return Eval_prime();
    case PRINT:
      return Eval_display();
    case PRODUCT:
      return Eval_product();
    case QUOTE:
      return Eval_quote();
    case QUOTIENT:
      return Eval_quotient();
    case RANK:
      return Eval_rank();
    case RATIONALIZE:
      return Eval_rationalize();
    case REAL:
      return Eval_real();
    case YYRECT:
      return Eval_rect();
    case ROOTS:
      return Eval_roots();
    case SETQ:
      return Eval_setq();
    case SGN:
      return Eval_sgn();
    case SIMPLIFY:
      return Eval_simplify();
    case SIN:
      return Eval_sin();
    case SINH:
      return Eval_sinh();
    case SQRT:
      return Eval_sqrt();
    case STOP:
      return Eval_stop();
    case SUBST:
      return Eval_subst();
    case SUM:
      return Eval_sum();
    case TAN:
      return Eval_tan();
    case TANH:
      return Eval_tanh();
    case TAYLOR:
      return Eval_taylor();
    case TEST:
      return Eval_test();
    case TESTEQ:
      return Eval_testeq();
    case TESTGE:
      return Eval_testge();
    case TESTGT:
      return Eval_testgt();
    case TESTLE:
      return Eval_testle();
    case TESTLT:
      return Eval_testlt();
    case TRANSPOSE:
      return Eval_transpose();
    case UNIT:
      return Eval_unit();
    case ZERO:
      return Eval_zero();
    default:
      return Eval_user_function();
  }
};

Eval_binding = function() {
  return push(get_binding(cadr(p1)));
};

Eval_check = function() {
  var p1;
  push(cadr(p1));
  Eval_predicate();
  p1 = pop();
  if (iszero(p1)) {
    stop("check(arg): arg is zero");
  }
  return push(symbol(NIL));
};

Eval_det = function() {
  push(cadr(p1));
  Eval();
  return det();
};

Eval_dim = function() {
  var n, p2;
  push(cadr(p1));
  Eval();
  p2 = pop();
  if (iscons(cddr(p1))) {
    push(caddr(p1));
    Eval();
    n = pop_integer();
  } else {
    n = 1;
  }
  if (!istensor(p2)) {
    return push_integer(1);
  } else if (n < 1 || n > p2.tensor.ndim) {
    return push(p1);
  } else {
    return push_integer(p2.tensor.dim[n - 1]);
  }
};

Eval_divisors = function() {
  push(cadr(p1));
  Eval();
  return divisors();
};

Eval_do = function() {
  var p1, results;
  push(car(p1));
  p1 = cdr(p1);
  results = [];
  while (iscons(p1)) {
    pop();
    push(car(p1));
    Eval();
    results.push(p1 = cdr(p1));
  }
  return results;
};

Eval_dsolve = function() {
  push(cadr(p1));
  Eval();
  push(caddr(p1));
  Eval();
  push(cadddr(p1));
  Eval();
  return dsolve();
};

Eval_Eval = function() {
  var p1;
  push(cadr(p1));
  Eval();
  p1 = cddr(p1);
  while (iscons(p1)) {
    push(car(p1));
    Eval();
    push(cadr(p1));
    Eval();
    subst();
    p1 = cddr(p1);
  }
  return Eval();
};

Eval_exp = function() {
  push(cadr(p1));
  Eval();
  return exponential();
};

Eval_factorial = function() {
  push(cadr(p1));
  Eval();
  return factorial();
};

Eval_factorpoly = function() {
  var p1, results;
  p1 = cdr(p1);
  push(car(p1));
  Eval();
  p1 = cdr(p1);
  push(car(p1));
  Eval();
  factorpoly();
  p1 = cdr(p1);
  results = [];
  while (iscons(p1)) {
    push(car(p1));
    Eval();
    factorpoly();
    results.push(p1 = cdr(p1));
  }
  return results;
};

Eval_hermite = function() {
  push(cadr(p1));
  Eval();
  push(caddr(p1));
  Eval();
  return hermite();
};

Eval_hilbert = function() {
  push(cadr(p1));
  Eval();
  return hilbert();
};

Eval_index = function() {
  var h, p1;
  h = tos;
  p1 = cdr(p1);
  while (iscons(p1)) {
    push(car(p1));
    Eval();
    p1 = cdr(p1);
  }
  return index_function(tos - h);
};

Eval_inv = function() {
  push(cadr(p1));
  Eval();
  return inv();
};

Eval_invg = function() {
  push(cadr(p1));
  Eval();
  return invg();
};

Eval_isinteger = function() {
  var n, p1;
  push(cadr(p1));
  Eval();
  p1 = pop();
  if (isrational(p1)) {
    if (isinteger(p1)) {
      push(one);
    } else {
      push(zero);
    }
    return;
  }
  if (isdouble(p1)) {
    n = int(p1.d);
    if (n === p1.d) {
      push(one);
    } else {
      push(zero);
    }
    return;
  }
  push_symbol(ISINTEGER);
  push(p1);
  return list(2);
};

Eval_multiply = function() {
  var p1, results;
  push(cadr(p1));
  Eval();
  p1 = cddr(p1);
  results = [];
  while (iscons(p1)) {
    push(car(p1));
    Eval();
    multiply();
    results.push(p1 = cdr(p1));
  }
  return results;
};

Eval_number = function() {
  var p1;
  push(cadr(p1));
  Eval();
  p1 = pop();
  if (p1.k === NUM || p1.k === DOUBLE) {
    return push_integer(1);
  } else {
    return push_integer(0);
  }
};

Eval_operator = function() {
  var h, p1;
  h = tos;
  push_symbol(OPERATOR);
  p1 = cdr(p1);
  while (iscons(p1)) {
    push(car(p1));
    Eval();
    p1 = cdr(p1);
  }
  return list(tos - h);
};

Eval_print = function() {
  var p1;
  p1 = cdr(p1);
  while (iscons(p1)) {
    push(car(p1));
    Eval();
    if (equaln(get_binding(symbol(TTY)), 1)) {
      printline(pop());
    } else {
      display(pop());
    }
    p1 = cdr(p1);
  }
  return push(symbol(NIL));
};

Eval_quote = function() {
  return push(cadr(p1));
};

Eval_rank = function() {
  var p1;
  push(cadr(p1));
  Eval();
  p1 = pop();
  if (istensor(p1)) {
    return push_integer(p1.tensor.ndim);
  } else {
    return push(zero);
  }
};

setq_indexed = function() {
  var h, p2, p3, p4;
  p4 = cadadr(p1);
  if (!issymbol(p4)) {
    stop("indexed assignment: error in symbol");
  }
  h = tos;
  push(caddr(p1));
  Eval();
  p2 = cdadr(p1);
  while (iscons(p2)) {
    push(car(p2));
    Eval();
    p2 = cdr(p2);
  }
  set_component(tos - h);
  p3 = pop();
  set_binding(p4, p3);
  return push(symbol(NIL));
};

Eval_setq = function() {
  var p2;
  if (caadr(p1) === symbol(INDEX)) {
    setq_indexed();
    return;
  }
  if (iscons(cadr(p1))) {
    define_user_function();
    return;
  }
  if (!issymbol(cadr(p1))) {
    stop("symbol assignment: error in symbol");
  }
  push(caddr(p1));
  Eval();
  p2 = pop();
  set_binding(cadr(p1), p2);
  return push(symbol(NIL));
};

Eval_sqrt = function() {
  push(cadr(p1));
  Eval();
  push_rational(1, 2);
  return power();
};

Eval_stop = function() {
  return stop("user stop");
};

Eval_subst = function() {
  push(cadddr(p1));
  Eval();
  push(caddr(p1));
  Eval();
  push(cadr(p1));
  Eval();
  subst();
  return Eval();
};

Eval_unit = function() {
  var i, j, n, p1, ref;
  push(cadr(p1));
  Eval();
  n = pop_integer();
  if (n < 2) {
    push(p1);
    return;
  }
  p1 = alloc_tensor(n * n);
  p1.tensor.ndim = 2;
  p1.tensor.dim[0] = n;
  p1.tensor.dim[1] = n;
  for (i = j = 0, ref = n; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    p1.tensor.elem[n * i + i] = one;
  }
  return push(p1);
};

Eval_noexpand = function() {
  var expanding, x;
  x = expanding;
  expanding = 0;
  Eval();
  return expanding = x;
};

Eval_predicate = function() {
  var p1;
  save();
  p1 = pop();
  if (car(p1) === symbol(SETQ)) {
    Eval_testeq();
  } else {
    push(p1);
    Eval();
  }
  return restore();
};

//# sourceMappingURL=eval.js.map
