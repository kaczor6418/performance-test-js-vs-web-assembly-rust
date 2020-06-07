mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn bubble_sort(elements_list: &mut [i32]) {
    let mut is_swapped: bool = true;
    let mut finish: usize = 0;
    while is_swapped {
        is_swapped = false;
        for i in 1..elements_list.len() - finish {
            if elements_list[i - 1] > elements_list[i] {
                elements_list.swap(i - 1, i);
                is_swapped = true
            }
        }
        finish += 1;
    }
}
