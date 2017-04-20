package com.reactnativenavigation.layout.impl;

public class BottomTabsLayout {

//public class BottomTabsLayout implements Layout, BottomNavigationView.OnNavigationItemSelectedListener {

//	private StackLayout stackLayout;
//
//	public static class TooManyTabs extends RuntimeException {
//		//
//	}
//
//	private final RelativeLayout view;
//	private final BottomNavigationView bottomNavigationView;
//	private final List<Layout> tabs = new ArrayList<>();
//	private int currentTab;
//
//	public BottomTabsLayout(Activity activity) {
//		view = new RelativeLayout(activity);
//		view.setId(CompatUtils.generateViewId());
//
//		bottomNavigationView = new BottomNavigationView(view.getContext());
//		bottomNavigationView.setId(CompatUtils.generateViewId());
//		bottomNavigationView.setBackgroundColor(Color.DKGRAY);
//		bottomNavigationView.setOnNavigationItemSelectedListener(this);
//		LayoutParams lp = new LayoutParams(MATCH_PARENT, WRAP_CONTENT);
//		lp.addRule(ALIGN_PARENT_BOTTOM);
//		bottomNavigationView.setLayoutParams(lp);
//		view.addView(bottomNavigationView, lp);
//	}
//
//	@Override
//	public View getView() {
//		return view;
//	}
//
//	@Override
//	public void destroy() {
//		//
//	}
//
//	@Override
//	public boolean onNavigationItemSelected(@NonNull final MenuItem item) {
//		hideTab(currentTab);
//		currentTab = item.getItemId();
//		showTab(currentTab);
//		return true;
//	}
//
//	public void addTab(String label, Layout tabLayout) {
//		if (tabs.size() >= 5) {
//			throw new TooManyTabs();
//		}
//		int tabId = bottomNavigationView.getMenu().size();
//		bottomNavigationView.getMenu().add(0, tabId, Menu.NONE, label);
//		LayoutParams tabParams = new LayoutParams(MATCH_PARENT, MATCH_PARENT);
//		tabParams.addRule(ABOVE, bottomNavigationView.getId());
//		view.addView(tabLayout.getView(), tabParams);
//		tabs.add(tabLayout);
//
//		if (tabs.size() > 1) {
//			tabLayout.getView().setVisibility(View.GONE);
//		}
//	}
//
//	private void showTab(int tabId) {
//		tabs.get(tabId).getView().setVisibility(View.VISIBLE);
//	}
//
//	private void hideTab(int tabId) {
//		tabs.get(tabId).getView().setVisibility(View.GONE);
//	}
//
//	@Override
//	public void setParentStackLayout(final StackLayout stackLayout) {
//		this.stackLayout = stackLayout;
//	}
//
//	@Override
//	public StackLayout getParentStackLayout() {
//		return stackLayout;
//	}
}
