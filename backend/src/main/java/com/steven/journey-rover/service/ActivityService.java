package com.example.demo.service;

import com.example.demo.model.Activity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ActivityService implements ActivityServiceInterface {

    private final Map<Long, Activity> activities = new HashMap<>();
    private Long nextActivityId = 1L;

    @Override
    public List<Activity> getAllActivities() {
        return new ArrayList<>(activities.values());
    }

    @Override
    public Activity getActivityById(Long id) {
        return activities.get(id);
    }

    @Override
    public Activity createActivity(Activity activity) {
        System.out.println("Hello!!!");
        Long activityId = nextActivityId++;
        activity.setId(activityId);
        activities.put(activityId, activity);
        return activity;
    }

    @Override
    public Activity updateActivity(Long id, Activity updatedActivity) {
        if (!activities.containsKey(id)) {
            throw new IllegalArgumentException("Activity not found with id: " + id);
        }
        updatedActivity.setId(id);
        activities.put(id, updatedActivity);
        return updatedActivity;
    }

    @Override
    public void deleteActivity(Long id) {
        activities.remove(id);
    }
}
